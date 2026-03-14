const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// GitHub Secretsから渡されるサービスアカウント情報を解析
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

const bucket = admin.storage().bucket();

async function uploadFile() {
  const filePath = path.join(__dirname, 'out', 'video.mp4');
  
  if (!fs.existsSync(filePath)) {
    console.error('Error: video.mp4 found in out/ directory.');
    process.exit(1);
  }

  const destination = `videos/video-${Date.now()}.mp4`;

  console.log(`Uploading ${filePath} to ${destination}...`);

  try {
    const [file] = await bucket.upload(filePath, {
      destination: destination,
      metadata: {
        contentType: 'video/mp4',
      },
    });

    // 公開URLを取得（設定によってはサイン付きURLが必要な場合があります）
    const [url] = await file.getSignedUrl({
      action: 'read',
      expires: '03-09-2491' // 遠い未来
    });

    console.log('Upload successful!');
    console.log('Video URL:', url);
  } catch (error) {
    console.error('Upload failed:', error);
    process.exit(1);
  }
}

uploadFile();
