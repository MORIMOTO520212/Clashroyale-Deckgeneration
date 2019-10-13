function objectSort(obj){
    // まずキーのみをソートする
    var keys = Object.keys(obj).sort();

    // 返却する空のオブジェクトを作る
    var map = {};

    // ソート済みのキー順に返却用のオブジェクトに値を格納する
    keys.forEach(function(key){
        var val = obj[key];

        // 中身がオブジェクトの場合は再帰呼び出しを行う
        if(typeof val === "object"){
            val = objectSort(val);
        }

        map[key] = val;
    });

    return map;
}

var a = {"a":"a","b":"b","o":{"a":"a","b":"b"}};
var b = {"b":"b","a":"a","o":{"b":"b","a":"a"}};

var aJSON = JSON.stringify(objectSort(a));
var bJSON = JSON.stringify(objectSort(b));

console.log(aJSON === bJSON);  // -> true