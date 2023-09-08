import BinaryTree from "./BinaryTree.js";
import MapClass from "./MapClass.js";
import HashTable from "./HashTable.js";

const ht = new HashTable<string, number>(8);

ht.set("zero", 0);
ht.set("one", 1);
ht.set("two", 2);
ht.set("three", 3);
ht.set("four", 4);
ht.set("five", 5);
ht.set("six", 6);
ht.set("seven", 7);
ht.set("eight", 8);
ht.set("nine", 9);
ht.set("ten", 10);
ht.set("eleven", 11);
ht.set("twelve", 12);
ht.set("twelve", 20);
ht.print();