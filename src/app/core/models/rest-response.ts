/**
 * 
 */
export class RestResponse {
    public id: string;//
    public message: string = "操作失败";//操作消息
    public success: boolean = false;// 是否执行成功
    public code: string = "0";//相应代码
    public result: any;//业务数据
}
