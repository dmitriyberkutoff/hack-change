export type FilesInfo = FileInfo[]

export interface FileInfo {
    id: number;
    type: 'IMAGE' | 'PDF';
    content: string;
}