export class IPostItems {
  constructor(
    public userId: number | string,
    public id: number | string,
    public title: string,
    public body: string ) {
  }
}
