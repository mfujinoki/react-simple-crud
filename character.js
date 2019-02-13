import mongoose from 'mongoose';

mongoose.Promise =  global.Promise;

// スキーマの作成
// 今回保存したいドキュメントは name(string) とage(Number)の二つのフィールドを持つ
 const CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number,
 });

 // モデルの作成
 // momngoose.modelの第一引数の複数形の名前（今回だと'characters'）のコレクションが生成される
 const Character = mongoose.model('Character', CharacterSchema);

 // モデルをexport
 export default Character;
