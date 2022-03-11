import React from "react";

export default function SortBy({ sortBy, setSortBy }) {
  return (
    <div>
      <select
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value="created_at">Date Written</option>
        <option value="votes">Likes</option>
        <option value="comment_count">Number of Comments</option>
      </select>
    </div>
  );
}
