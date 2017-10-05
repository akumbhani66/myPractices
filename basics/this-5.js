function warrior(speed, strength){
  console.log(
    "Warrior: " + this.kind +
    ", weapon: " + this.weapon +
    ", speed: " + speed +
    ", strength: " + strength
  );
}

var warrior1 = {
  kind: "ninja",
  weapon: "shuriken"
};

var warrior2 = {
  kind: "samurai",
  weapon: "katana"
};

warrior.call(warrior1, 9, 5);
// output: Warrior: ninja, weapon: shuriken, speed: 9, strength: 5
warrior.apply(warrior2, [6, 10]);
// output: Warrior: samurai, weapon: katana, speed: 6, strength: 10
