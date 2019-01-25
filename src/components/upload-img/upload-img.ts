import { Component, Input } from '@angular/core';
import { ImgServiceProvider } from '../../providers/img-service/img-service';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the UploadImgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'upload-img',
  templateUrl: 'upload-img.html'
})
export class UploadImgComponent {

  @Input() name: string;
  imgList = [];
  constructor(
    private devolup: ImgServiceProvider,
    public http: UserService,

  ) {
  }


  //规格上传图片
  guigeimgup() {
    let selfs = this
    this.devolup.showPicActionSheet();
    this.devolup.upload.success = data => {
      if (data.info == "ok") {
        //selfs.imageUrl = data.imageUrl;
        selfs.http.presentToast('上传成功')
        console.log(data.object.map.filename)
      } else {
        selfs.http.presentToast('上传失败')
      }
    };
  }

}
