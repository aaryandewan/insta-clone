import Header from "./header";

export default function Post({ content }) {
  console.log("content", content);

  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      <Header username={content.username} />
    </div>
  );
}
