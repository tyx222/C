export class DefaultAppConfig {
    get ip() {
        return this.localIp;
    }
    localIp: string = 'https://www.petbashi.com/';
    serverIp: string = 'http://116.62.219.45/';
  //  eolike:string='http://result.eolinker.com/daB2tJV365bcbeb49660595f30dfebd2832cd37ca35653f?uri=http://116.62.219.45/'
    debug: boolean = true;
}
export class ProdAppConfig extends DefaultAppConfig {

}