type BlogCardProps = {
    title: string;
    content: string;
    authorId: number;
    createdAt: string;
};

export default function BlogCard({ title, content, authorId, createdAt }: BlogCardProps) {
    return (
        <div className="border p-4 rounded w-full max-w-md">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 text-sm">Author ID: {authorId}</p>
            <p className="text-gray-800 mt-2">{content}</p>
            <p className="text-gray-500 text-xs mt-4">{new Date(createdAt).toLocaleString()}</p>
        </div>
    );
}
