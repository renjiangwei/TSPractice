"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let b = [
    {
        id: 'id',
        name: 'name',
        children: [
            {
                id: '',
                name: ''
            }
        ]
    }
];
// 索引类型 keyof
let treeData = {
    id: '123',
    name: 'name123'
};
function findKeyOfData(obj, keys) {
    return keys.map(i => obj[i]);
}
console.log(findKeyOfData(treeData, ['id', 'name']), 'find');
let a = {
    id: 'asd',
    name: 'name',
};
let c = {
    id: 'id',
};
let d = {
    abc: { id: 'asd', name: 'dsad' },
};
let e = {
    id: 'sad'
};
let f = 'age';
let g = 'name';
let h = {
    name: 'name',
};
