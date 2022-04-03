const CONTRACT_ADDRESS = '0xf0337c0eE0ddd29a88617dB59F7e10c0AD8D0dd3';

//NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

// 変数を constants.js 以外の場所でも使えるようにします。
export { CONTRACT_ADDRESS, transformCharacterData };