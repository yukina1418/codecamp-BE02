import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
// import { File } from './models/entities/file.entity';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';

interface IFile {
  files: FileUpload[];
}
// 객체로 들어온 파일의 정보를 인터페이스화 시켜서 리졸버단에서 쓰던 자동완성을 서비스단에서도 쓸 수 있게 한다
@Injectable()
export class FileService {
  async upload({ files }: IFile) {
    // console.log(files);
    const storage = new Storage({
      keyFilename: '/my-secret/gcp.key.json',
      projectId: process.env.PROJECTID, // 프로젝트 아이디
    }).bucket(process.env.BUCKET); // 버켓(폴더) 이름

    //.file(file.filename); // 이런 이름으로 저장한다

    // 일단 먼저 배열을 다 받아와야함

    const waitedFiles = await Promise.all(files);

    //   files// [file,file,file,file]
    const results = await Promise.all(
      waitedFiles.map((el) => {
        return new Promise((resolve, reject) => {
          el.createReadStream() // <- 스토리지에 업로드해줘
            .pipe(
              storage.file(el.filename).createWriteStream({ resumable: false }),
            ) // .pipe 읽은 파일에 옵션을 줄 때 사용한다
            .on('finish', () => resolve(`image__data/${el.filename}`)) // <- 성공하면 이거 실행
            .on('error', () => reject('멍청아')); // <- 실패하면 이거 실행
        });
      }),
    );
    console.log(results);

    return results;
  }
}

// async await 는 promise에서만 사용이 가능하다
// file
//       .createReadStream()
//       .pipe(storage.createWriteStream()) // <- 스토리지에 업로드해줘
//       .on('finish', () => {
//         return url;
//       }) // <- 성공하면 이거 실행
//       .on('error', () => {}); // <- 실패하면 이거 실행
//     // .pipe 읽은 파일에 옵션을 줄 때 사용한다
