function make_shirt(size, printMessgae) {
    if (size === void 0) { size = "medium"; }
    if (printMessgae === void 0) { printMessgae = "i love TypeSCRIPT"; }
    console.log("create a ".concat(size, " size shirt and print ").concat(printMessgae, " on it"));
}
make_shirt();
console.log("hello");
make_shirt();
make_shirt("Large", "love java");
