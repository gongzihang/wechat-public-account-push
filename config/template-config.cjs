
/* eslint-disable */
const TEMPLATE_CONFIG = [
    {
      id: '0001',
      title: '亲爱的小公主, 早上好鸭',
      desc: `
        **{{date.DATA}}** &ensp; **{{province.DATA}}**·**{{city.DATA}}**
        
        早安心语：{{tian_api_morning_greeting.DATA}}
        
        ---
        
        **城市** ：{{city.DATA}}
        
        **天气**☁️：{{weather.DATA}}
        
        **温度**🌡️:{{max_temperature.DATA}} / {{min_temperature.DATA}}
        
        **风向**: {{wind_direction.DATA}}
        
        **风级**: {{wind_scale.DATA}}
        
        **温馨提示**：{{notice.DATA}}

        **生活指数**：{{tian_api_weather_tips_0.DATA}}
        
        {{comprehensive_horoscope.DATA}}
        
        ---
        
        今天是我们**相恋**的第**{{love_day.DATA}}**天
        
        {{birthday_message.DATA}}
        
        ---
        
        💗：{{earthy_love_words.DATA}}
        
        每日一句英文😋

        {{note_en.DATA}}

        ---
        
        {{moment_copyrighting.DATA}}
        
        {{poetry_title.DATA}} {{poetry_content.DATA}}
        
        ---

        今天 龚仔航 也超级超级更爱 田雨藤！！！
        
        **Love U**
      `
    },
    {
      id: '0002',
      title: '推送完成提醒',
      desc: `
        服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
        
        ---
        
        共推送 {{need_post_num.DATA}} 人
        
        成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
        
        成功用户: {{success_post_ids.DATA}}
        
        失败用户: {{fail_post_ids.DATA}}
      `
    },
  ]
  
  module.exports = TEMPLATE_CONFIG
