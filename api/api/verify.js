export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // 后续你要加付费功能，就在这里写支付验证逻辑
    // 现在是基础框架，部署不会报错
    res.status(200).json({ 
        status: 'ok',
        msg: '验证接口正常运行'
    });
}
