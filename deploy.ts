import fs from 'fs';
import path from 'path';
import https from 'https';

const token = process.env.VERCEL_TOKEN; // Make sure to set this environment variable
const projectName = 'serviconnect';

function uploadFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);

  const options = {
    hostname: 'api.vercel.com',
    path: `/v2/now/files?name=${projectName}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Authorization': `Bearer ${token}`,
      'x-now-digest': Buffer.from(fileContent).toString('hex'),
      'x-now-size': fileContent.length,
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log(`${fileName} uploaded, status: ${res.statusCode}`);
        resolve(data);
      });
    });

    req.on('error', (error) => {
      console.error(`Error uploading ${fileName}:`, error);
      reject(error);
    });

    req.write(fileContent);
    req.end();
  });
}

function makeHttpsRequest(options: https.RequestOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function deployProject() {
  try {
    // Upload key files
    await uploadFile('package.json');
    await uploadFile('next.config.js');
    await uploadFile('vercel.json');
    
    // Add more files as needed
    // For example:
    // await uploadFile('app/page.tsx');
    // await uploadFile('app/layout.tsx');
    
    console.log('All files uploaded successfully');
    
    // Trigger the deployment
    const deployOptions = {
      hostname: 'api.vercel.com',
      path: '/v13/deployments',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    };
    
    const deployReq = https.request(deployOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log('Deployment triggered:', JSON.parse(data));
      });
    });
    
    deployReq.on('error', (error) => {
      console.error('Error triggering deployment:', error);
    });
    
    deployReq.write(JSON.stringify({ name: projectName }));
    deployReq.end();
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deployProject();
