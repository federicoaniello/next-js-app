import S3 from "aws-sdk/clients/s3";

export default async function aws(file: File):Promise<string> {

  const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-north-1',
    signatureVersion: "v4",
});

  try {
    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: file.name,
      Expires: 600,
      ContentType: file.type,
    };
    const url = await s3.getSignedUrlPromise("putObject", fileParams);
    
    await fetch(url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": String(file.type),
        "Access-Control-Allow-Origin": "*",
      }

    });
    return "Success";
  } catch (error) {
    return "Error";
  }
}
