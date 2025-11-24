const formatSubtitle = (text = "") => {
  return text
    .replace(/\$/g, "\u200B$")
    .replace(/([:!?,.;])/g, "$1\u200B")
    .replace(/(\S{15})(\S)/g, "$1\u200B$2");
};

export default formatSubtitle;
