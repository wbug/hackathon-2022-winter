export default {
  signIn: '登录',
  signUp: '注册',
  square: '广场',
  curations: '策展',
  faq: '常见问题',
  aboutUs: '关于我们',
  discord: 'Discord',
  twitter: 'Twitter',
  faucet: '水龙头',
  logout: '登出',
  signUpView: {
    t1: '激活您的web3账号',
    t2: '并注册',
    btn1: '激活您的钱包',
    p1: '已经绑定了账号?',
    p2: '登录'
  },
  verifyView: {
    p1: '下面是您的账号的私钥',
    p2: '请将此私钥保存在安全的地方。我们不会保存该密码，所以如果你丢失了该密码，您的账号将无法恢复！',
    btn1: '好的，我已经保存',
    p3: '太棒了，',
    p4: '现在让我们去发推绑定账号',
    btn2: '去绑定',
    p5: '已发送绑定推特后',
    p6: '从此处登录',
    p7: '您确定已经保存了该非常重要的密码?',
    p8: '我知道一旦我没有保存或者丢失该密码后，没有人可以帮我恢复我的账号',
    btn3: '是的，我确定'
  },
  signInView: {
    p1: '请输入您的推特账号',
    p2: '还没有注册?',
    p3: '创建一个新的账号',
    p4: '您的账号正在注册中',
    p5: '请稍后',
    p6: '您还没有发送推特以绑定账号',
  },
  squareView: {
    p1: '将推特同步到区块链以获取奖励',
    p2: '当前话题还没有帖子。请切换其他话题看看'
  },
  tagView: {
    p1: 'Utopianism, some argue, is essential for the improvement of the human condition.'
  },
  topicsView: {
    title: '更多话题',
    post: '帖子'
  },
  postView: {
    tweetPost: '发布推特',
    socialToken: '社交资产',
    resourceCredits: 'Resource Credits',
    p1: '每一篇您同步到区块链的贴纸，都需要消耗您的能量(RC), 所以一旦能量值很低的时候，您的帖子可能不会发布到链上。但是能量会以每天20%的速度线性恢复。',
    goTweet: '去发推',
    tips: '提示',
    p2: '将 {\'{***}\'} 替换成您的发布内容。',
    p3: '将 {\'{wormhole3}\'} 替换成真实的Steem账号',
    tweetTip: '推特小贴士',
    tip1: '1. 发布内容到区块链。',
    tip2: '2. 将 STEEM/SBD 打赏给其他Twitter账号。',
    tip3: '3. 将 STEEM/SBD 转给其他Steem账号。',
    p4: '您的账号正在注册中',
    p5: '请稍等',
    p6: '您还没有发推',
    p7: '您还没有发布任何内容到虫洞，请尝试开启您的web3之旅吧。',
    p8: '该服务仍在测试阶段，请不要转入不能承受的损失的金额到账户中',
    p9: '将 {\'{@vitalik}\'} 替换成真实的Twitter账号',
    p10: '您还没有注册虫洞账号，请激活虫洞账号，以获取属于您的加密资产。'
  },
  profileView: {
    socialAsset: '社交资产',
    web3Wallet: 'Web3钱包',
    ethWallet: '以太坊钱包',
    getNftP1: '一个展示您推特社交影响力的NFT',
    people: '用户',
    curations: '策展'
  },
  token: {
    noNft: "您还没有任何NFT",
  },
  transactionView: {
    recentTransaction: '交易记录',
    recentTip: '小费记录',
    viewBlockchain: '在区块链查看',
    fail: '失败',
    waiting: '等待...',
    receiveFrom: '来自',
    sendTo: '发给',
    transTip: `该功能还在测试阶段，请注意不要往web3账号转入过多的资金。`,
    tipTip: `还没有小费记录，您可以使用!tip命令对任意的推特账号打赏小费，也可以邀请任何推特用户为您的创作打赏小费。`,
    returned: '已返回'
  },
  aboutView: {
    q1: '1. How to generate a new address, do you keep the private key on platform?',
    a1: 'To be updated... By using graphene technology, Wormhole3 can generate a Web3 id for each user, and derive its low-privilege Web3_social id. The private key of the Web3 id is uniquely held by the user, and the Web3_social id is delegated to the user\'s Web2 account (such as Twitter) in a decentralized manner. This has brought about a huge change. On the Web2 platform, users can control the Web3_social id, such as tweeting on the Twitter page to upload posts on the chain and tweeting to transfer cryptocurrencies. There is no need to install any Web3 plug-in wallet in the whole process, and there is no need to consider issues such as handling fees.😎'
  },
  faqView: {
    q1: 'How to generate a new address, do you keep the private key on platform?',
    a1: 'We generate a random new address in your own front page, and the key never be sent to our platform, so we never touch and keep it.',
    q2: 'Need I restore my private key after I binded my account? Can I find it back if I lost it?',
    a2: 'Please keep your key in a very security place, we dont keep them, so nobody can find them back if you lose them.',
    q3: 'Can I send crypto asset through twitter? How?',
    a3p1: 'Yes, you can send STEEM token at this phase, but can\'t send eth assets because of we don\'t keep your key.',
    a3p2: `You can send STEEM to another one by send twitter: {'@'}wormhole_3 !send 1 STEEM to {'@'}another Steem account.`,
    q4: 'Can I sync my tweets to web3?',
    a4p1: 'Sure, your tweet will be stored in web3 for ever, it always belong to you.',
    a4p2: `You can send twitter to sync them like this: {'{content}'} #iweb3.`,
  },
  curationsView: {
    p1: '参与策展获得FTs， NFTs和其他的奖励.',
    p2: '还没有创建任何的策展任务，尝试创建一个吧',
    t1: '提示：推特用户在参与虫洞策展活动之前，必须先注册虫洞账号，否则策展将无效。',
    createBtn: '创建策展',
    createCuration: '创建策展',
    shareCuration: '分享策展活动'
  },
  tips: {
    missingInput: "请填写完整信息.",
    textLengthOut: "文本内容超过了限制.",
    connectMetamaskFirst: '请先连接钱包',
    wrongEndTime: '您填写的结束时间已经过期了'
  },
  ref: {
    referre: '推荐',
    refereeCode: '推荐码',
    inputReferee: "请输入推荐码(可选)",
    refDes: "推荐码由已注册的虫洞用户生成。",
    wrongReferee: '推荐码错误',
    copied: "已复制推荐链接"
  },
  airdrop: {
    testToken: '测试币',
    applyBtn: "获取测试币",
    wait: '当前排队人数较多，请稍后再试',
    received: '已发放',
    wrongId: '您登陆的账号有误，请重新登录。',
    t1: "每位注册的虫洞用户都可以领取Polygon上的测试币，包含0.2个MATIC（每位用户只能领取一次）和10个测试用的USDT（请注意该币为测试币，非正式的USDT）。\n测试币的领取可能会花费较长时间，请耐心等候。\n注意：空投只会空投到您在注册虫洞时生成的web3账号中\n地址为： {address}"
  },
  curation: {
    title: '标题',
    inputTitle: '请输入标题',
    schedule: '计划',
    startTimeTip: '默认的开始时间为创建的时间。请选择活动结束的时间',
    descriptionTitle: '填写推特内容',
    description: '该内容为您想要推广的推文，在成功创建策展奖励池后我们提供一键发推按钮，使您轻松发表推文以激活策展。在生成的推文中我们会添加一些必要的标签和链接，请不要删除这些内容后发推，否则将无法激活该策展',
    inputDes: "请输入策展的详细内容",
    connectWallet: "连接钱包",
    maxCount: '最大奖励人数',
    maxCountTip: '奖励只会分发给策展分数最高的部分人',
    inputMaxCount: '请输入最大奖励人数',
    noLimited: '不限制',
    reward: "奖励",
    rewardsMethod: '奖励策略',
    posw: "主观工作证明(PoSW)",
    poswDes: '该方案会根据策展用户的策展贡献分数来分配奖励',
    autoMethod: '自动分发',
    autoMethodTip: '当您使用自动分发协议创建策展任务时，需要将ERC20代币暂存到wormhole3的智能合约中。该奖励最终会全部分发给参与策展的用户， 他们将利用自己的推特影响力来帮您传播您的推特内容。策展结束后，奖励将自动从合约分发给这些策展用户，奖励的分发比例参照他们的推特影响力，该值由策展人的推特声望值和转推推特的点赞情况进行计算。',
    rewardsAmount: '奖励数量',
    inputRewardsAmount: '请输入奖励数量',
    inputErc20: '输入ERC20地址或从列表选择',
    totalAmount: "总数量",
    insuffientBalance: '余额不足',
    approveFail: '授权失败',
    create:"创建",
    createTip: "由于策展奖励的分发需要，您必须将( {rewards} )预先放入策展合约中，当策展活动结束后，奖励将分发给符合规则的策展用户。",
    backToEdit: '返回编辑',
    crateFail: "创建策展失败",
    createdOk: '创建策展成功!',
    startCuration: '去发推并开启策展活动',
    moreDetail: '更多',
    ongoing: '进行中',
    end: "已结束",
    complete: '已完成',
    invalidStatus: '未开始',
    curationDetail: '策展详情',
    viewAll: '查看更多',
    rewardOnChain: '链上奖励',
    curators: '策展',
    attendCuration: '参加策展',
    attended: '已参加',
    toBeReward: '等待发奖',
    unattend: '未参加',
    tweetToAttend: '发推并参加',
    notTweeted: '未发推',
    comfirmReward: '确认奖励',
    partiallyConfirmed: '部分已发放',
    allConfirmed: '全部发放',
    claimReward: '分发奖励',
    claimRewardTip: '由于奖励方法为链上转账，每次最多会发放300个策展者奖励，系统会自动分多批次进行奖励发放。',
    pendingClaim: '等待分发',
    claim: '分发',
    claimed: '已分发',
    submissions: '策展列表'
  },
  err: {
    serverErr: '服务端错误',
    transErr: '交易失败',
    loginErr: '登录失败'
  },
  common: {
    none: '没有',
    noMore: '没有更多',
    post: '帖子',
    token: 'Token',
    nft: 'NFTs',
    next: '下一步',
    preview: '上一步',
    submit: '提交',
    confirm: '确认',
    send: '发送',
    approve: '授权',
    active: '激活',
    connectMetamask: '连接小狐狸',
    pullRefresh: '下拉刷新',
    loosingRefresh: '释放刷新',
    loading: '加载中...',
    serverError: '服务端错误',
    get: '获取',
    balance: '余额',
    registerNow: '现在注册',
    whatsSteem: 'Steem是一条基于社区的公链，并为内容创造者提供了公平的收益权'
  }
}