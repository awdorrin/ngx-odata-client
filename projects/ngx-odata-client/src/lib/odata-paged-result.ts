export class ODataPagedResult<T> {
    public data: T[] = [];
    public count: number = 0;
    public nextLink: string = "";
}
