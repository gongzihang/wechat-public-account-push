
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

        今天 龚仔航 也超级超级爱 田雨藤！！！
        
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
    {
        id: '0003',
        title: '我最爱的宝贝，生日快乐哇！！',
        desc: `
        # 💖 亲爱的 *小公主*，

        # 🎉 生日快乐！ 🎂

        在这个特别的一天，愿你的笑容如阳光灿烂，幸福如绽放的花朵。
        
        ## 🌹 超级爱你哇
        
        - 💑 有你的日子，我的生活充满了甜蜜与温馨。
        - 💞 你是我生命中最珍贵的礼物，每一天都因为有你而变得更美好。
        - 🌈 愿我们的爱情如彩虹般美丽，永不褪色。
        
        ## 🎁 祝福鸭

        - 🌟 愿我们的未来充满激情和共同成长！
        - 🌈 愿你每一天都如画一般美好，幸福永驻。

        最后，愿你的每一天都充满爱和快乐。生日快乐，LOVE U ！🥳💕
        `
      },
  ]
  
  module.exports = TEMPLATE_CONFIG
