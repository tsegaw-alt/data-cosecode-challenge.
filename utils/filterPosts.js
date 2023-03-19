export const filterPosts = (posts, searchTerm) => {
  if (!searchTerm) return posts;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredPosts;
};
