export default function FilterBar() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <select>
        <option value="price">Price</option>
        <option value="distance">Distance</option>
      </select>
    </div>
  );
}
