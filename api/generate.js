export default function handler(req, res) {
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只支持POST请求' });
    }

    const { keyword } = req.body || {};
    if (!keyword) {
        return res.status(400).json({ error: '缺少关键词' });
    }

    // 文案模板，你可以自己随意修改增加
    const templates = [
        `【${keyword}】真的绝了！用过的人都说好，宝藏好物闭眼入，不踩雷的良心推荐，人手一个的刚需单品，早买早享受！`,
        `不会还有人没试过${keyword}吧？性价比直接拉满，体验感远超预期，用过就回不去，日常刚需必备，闭眼冲就对了！`,
        `${keyword}深度测评来了！优点缺点全都说清楚，看完再买不踩坑，新手小白也能看懂的真实分享，建议收藏！`,
        `关于${keyword}，这是我用过最省心的选择，颜值和实力都在线，日常用完全足够，预算有限的朋友直接抄作业！`
    ];

    // 随机返回一条文案
    const randomText = templates[Math.floor(Math.random() * templates.length)];
    res.status(200).json({ content: randomText });
}
