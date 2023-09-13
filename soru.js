function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-How much do I love you?",
    {
      a: "more than myself",
      b: "more than my books",
      c: "endless",
      d: "no word to describe",
    },
    "c"
  ),
  new Soru(
    "2- How many minutes I will hug you?",
    { a: "few minutes", b: "not so long", c: "untill you get bored" },
    "c"
  ),
  new Soru(
    "3-What I am gonna do when you smile?",
    {
      a: "i will also smile and feel peaceful",
      b: "I will pray you to never stop smiling.",
      c: "Both",
    },
    "c"
  ),
  new Soru(
    "4-How old is my favourite person?",
    { a: "25", b: "23", c: "21" },
    "c"
  ),
];
