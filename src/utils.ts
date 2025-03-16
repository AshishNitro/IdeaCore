export function random(len: number) {
    let options = "sdfsfwereq34w3r43rwefs";
    let length = options.length;

    let ans = "";

    for (let i = 0; i < len; i++) {
        ans += options[Math.floor((Math.random() * length))] // 0 => 20
    }

    return ans;
}