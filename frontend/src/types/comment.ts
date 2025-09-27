export default interface Comment {
    id: number;
    user: User;
    text: string;
    datePosted: string;
    replies?: Comment[];
    // likes?: number;
    // dislikes?: number;
    // isEdited?: boolean;
    // attachments?: string[];
    // parentId?: number | null;
}
interface User{
    name: string;
    avatar?: string;
}
     