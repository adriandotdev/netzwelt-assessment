export default interface Territory {
    id: string,
    name: string,
    parent: string | null,
    children?: Territory[]
}