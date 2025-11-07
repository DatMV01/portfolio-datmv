const CVHighlightText = (text: string) => {
  return text.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-black">$1</strong>'
  );
};

export default CVHighlightText;
