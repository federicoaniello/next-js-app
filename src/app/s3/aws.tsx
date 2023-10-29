import s3 from "./s3";

export default async function aws(file: File) {

    try {
       const fileParams = {
        Bucket:process.env.NEXT_PUBLIC_BUCKET_NAME,
        Key: file.name,
        Expires: 600,
        ContentType: file.type,
       }
       debugger
       const url = await s3.getSignedUrlPromise('putObject', fileParams);

       await fetch(url, {headers:{
        'Content-Type': String(file.type)
       }})
        return "Success";
    } catch (error) {
        return error;
    }
}