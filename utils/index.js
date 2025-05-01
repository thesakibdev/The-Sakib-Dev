// utils/colorUtils.js

// কালার লিস্ট
export const bgColorList = [
  "#ec4899", // pink-500
  "#3b82f6", // blue-500
  "#22c55e", // green-500
  "#a855f7", // purple-500
  "#eab308", // yellow-500
  "#ef4444", // red-500
  // আরও কালার যোগ করতে পারেন
];

// একটি র্যান্ডম কালার পাওয়ার জন্য ফাংশন
export const getRandomBgColor = () => {
  const randomIndex = Math.floor(Math.random() * bgColorList.length);
  return bgColorList[randomIndex];
};

// একটি নির্দিষ্ট সংখ্যক আইটেমের জন্য র্যান্ডম কালারের একটি অ্যারে তৈরি করা
export const generateRandomColors = (itemCount) => {
  const colors = [];
  for (let i = 0; i < itemCount; i++) {
    colors.push(getRandomBgColor());
  }
  return colors;
};

// React হুক - কালার স্টেট ব্যবহার করার জন্য
export const useRandomColors = (itemCount) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(generateRandomColors(itemCount));
  }, [itemCount]);

  return colors;
};
