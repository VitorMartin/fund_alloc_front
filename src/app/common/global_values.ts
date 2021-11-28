export const basedate = new Date().toISOString().split('T')[0];

export const http_config = {
    protocol: 'http',
    host: 'localhost',
    port: '80',
    root: '',
    base_url: 'http://localhost:80'
}

export const route = {
    fund: '/fund',
    fund_princ: '/fund/princ',
    fund_flow: '/fund/flow',
    desemb: '/desemb'
}

export const key = {
    funds: 'funds',
    fund: 'fund',
    deal_id: 'dealId',
    basedate: 'basedate',
    kold: 'kold',
    princ: 'princ',
    flow: 'flow',
    ccb: 'ccb',
    amortDesembs: 'amortDesembs',
    type: 'type',
    val: 'val',
    avail_bef: 'availBefore',
    avail_aft: 'availAfter',
    data: 'data',
    desemb_princ: 'desembPrinc',
    fund_princ: 'fundPrinc'
}

export enum FLOW_TYPE {
    fund = 'fund',
    desemb = 'desemb',
    amort_fund = 'amort_fund',
    amort_desemb = 'amort_desemb'
}

export enum CCY {
    USD = 'USD',
    EUR = 'EUR',
    BRL = 'BRL'
}

export enum amort_column {
    data = 'data',
    type = 'type',
    val = 'val',
    avail_aft = 'avail_aft'
}