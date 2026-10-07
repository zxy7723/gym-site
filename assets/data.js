/* ============================================================
   健身动作数据文件 —— 集中管理所有内容与媒体素材
   ------------------------------------------------------------
   🔧 替换素材方法：直接修改下方每个动作的 cover / coverAlt / demo
   - cover      : 封面照片 URL（或本地相对路径，如 "images/xxx.jpg"）
   - coverAlt   : 封面备用/第二张照片（用于动效演示）
   - demo       : 演示"视频"URL。若为对象 {type:"sequence"} 则用两张图交替演示；
                  若为 {type:"video", src, poster} 则用 <video> 播放。
   你把自己拍的/找的视频图片放到 assets/images、assets/videos 后改这里即可。
   ============================================================ */

window.GYM_DATA = {
  hero: {
    title: "健身房力量训练动作图鉴",
    subtitle: "胸 · 肩 · 背 · 腿 · 拉伸 五大板块 · 标准动作要领与常见易错点解析",
    tag: "FITNESS GUIDE",
    motto: "自律是自由的前提，汗水是最诚实的回报",
    quotes: [
      "每一次力竭，都是离更好的自己更进一步",
      "你今天流下的汗，会成为明天最坚硬的铠甲",
      "没有天赋异禀，只有日复一日的坚持",
      "你以为的极限，只是别人的起点 —— 打破它",
      "锻炼身体，就是给未来的人生攒下本钱",
      "别让明天的你，后悔今天的懒惰"
    ]
  },
  categories: [
    {
      id: "chest",
      name: "胸",
      en: "CHEST",
      color: "#ff4d4f",
      subtitle: "打造饱满胸肌 · 推力为主",
      motiv: "练出胸肌，也练出自信与魄力",
      icon: "🔴",
      exercises: [
        {
          id: "bench-press",
          name: "平板卧推",
          en: "Barbell Bench Press",
          target: ["胸大肌(中部)", "肱三头肌", "三角肌前束"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bench-press-1.png",
          demo: {
            type: "video",
            src: "assets/videos/bench-press.mp4",
            mime: "video/mp4",
            poster: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bench-press-1.png"
          },
          steps: [
            "仰卧在平板凳上，头部、上背、臀部三点紧贴凳面，腰部自然微微拱起（约一掌厚）",
            "双手正握杠铃，握距略宽于肩（约1.5倍肩宽），双脚用力踩实地面",
            "起杠前先主动收紧肩胛骨、肩带下沉，让杠铃稳定在锁骨正上方",
            "有控制地慢放杠铃至胸部中下沿（乳头附近），小臂保持垂直地面",
            "触胸后蹬地发力推起，推至顶点时手臂伸直但不锁死肘关节"
          ],
          tips: {
            good: ["肩胛骨始终后缩下沉，上背贴凳", "肘部内收约45°，勿张开成90°", "推起时呼气，下落时吸气"],
            mistakes: [
              "肩胛没收紧→耸肩，导致肩膀代偿借力",
              "手肘外展成T字手→易引发肩关节撞击",
              "胸口反弹杠铃→靠弹力借力，增加胸骨风险",
              "双脚离地/乱放→破坏整体稳定性",
              "推起后肘关节超伸锁死→长期损伤肘关节"
            ]
          }
        },
        {
          id: "dumbbell-bench-press",
          name: "哑铃平板推胸",
          en: "Dumbbell Bench Press",
          target: ["胸大肌(中部)", "肱三头肌", "三角肌前束"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Dumbbell-bench-press-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/9/93/Dumbbell-bench-press-2.png",
          demo: {
            type: "video",
            src: "assets/videos/dumbbell-bench-press.mp4",
            mime: "video/mp4",
            poster: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Dumbbell-bench-press-1.png"
          },
          steps: [
            "仰卧平板凳，双手各持一只哑铃，拳眼相对，哑铃举于胸部正上方",
            "核心收紧、肩胛后缩下沉，保持挺胸",
            "呼气，胸大肌发力带动大臂将哑铃向身体两侧打开下放（大臂平行或略低于背部水平面）",
            "吸气，将哑铃推回胸部正上方，哑铃不相碰、保持平行于地面",
            "全程腕关节中立位，肘关节不锁死"
          ],
          tips: {
            good: ["哑铃轨迹沿弧线打开再合拢，刺激更全面", "两侧发力均衡，重量相近", "下放至大臂与地面平行即可"],
            mistakes: [
              "含胸、耸肩→胸肌感受不明显",
              "哑铃下放过低→肩关节压力过大",
              "身体晃动借力→核心未收紧",
              "手腕过度后折→腕关节损伤"
            ]
          }
        },
        {
          id: "incline-bench-press",
          name: "上斜卧推",
          en: "Incline Bench Press",
          target: ["胸大肌(上部)", "三角肌前束", "肱三头肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/8/86/Incline-bench-press-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/1/14/Incline-bench-press-2.png",
          demo: {
            type: "video",
            src: "assets/videos/incline-bench-press.mp4",
            mime: "video/mp4",
            poster: "https://upload.wikimedia.org/wikipedia/commons/8/86/Incline-bench-press-1.png"
          },
          steps: [
            "将卧推凳调整为30-45°上斜角度，仰卧坐好，臀部与背部贴紧凳面",
            "双手握距略宽于肩，肩胛骨收紧下沉，挺胸",
            "将杠铃缓慢下放至上胸（锁骨下方）位置",
            "发力推起至胸部上方，手臂伸直但不锁死",
            "全程保持肩胛稳定、核心收紧"
          ],
          tips: {
            good: ["上斜角度不宜过大（≤45°），避免肩部压力", "重点刺激上胸，改善上胸扁平", "下放控制，避免砸胸"],
            mistakes: [
              "角度过大→压力转移到肩部",
              "身体滑下/弓腰过高→腰部受伤",
              "肘部过度外展→肩关节不适",
              "下放位置偏低→练到下胸而非上胸"
            ]
          }
        },
        {
          id: "dumbbell-fly",
          name: "哑铃飞鸟",
          en: "Dumbbell Fly",
          target: ["胸大肌(中缝/外沿)"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Dumbbell-flys-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/2/24/Dumbbell-flys-2.png",
          demo: { type: "sequence" },
          steps: [
            "仰卧平板凳，双手各持哑铃举于胸部正上方，掌心相对，肘部微屈",
            "保持肘部微屈角度固定，双臂向两侧打开，如环抱大树般下放",
            "下放至胸大肌有充分拉伸感（大臂略低于肩）",
            "胸大肌发力将双臂合拢回正上方，挤压胸肌",
            "动作缓慢有控制，专注胸肌发力而非手臂"
          ],
          tips: {
            good: ["动作像环抱物体，肘角全程不变", "重量宜轻，孤立刺激胸肌", "顶峰收缩停顿1秒"],
            mistakes: [
              "重量过大→变成卧推/夹胸，借力",
              "肘关节完全伸直锁死→肘部受力过大",
              "下放过深→肩关节压力激增",
              "耸肩代偿→胸肌刺激减弱"
            ]
          }
        }
      ]
    },
    {
      id: "shoulder",
      name: "肩",
      en: "SHOULDERS",
      color: "#faad14",
      subtitle: "饱满三角肌 · 推拉并举",
      motiv: "挺直肩膀，就是挺直人生的态度",
      icon: "🟡",
      exercises: [
        {
          id: "shoulder-press",
          name: "哑铃肩上推举",
          en: "Dumbbell Shoulder Press",
          target: ["三角肌(前/中束)", "肱三头肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/1/15/Dumbbell-shoulder-press-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Dumbbell-shoulder-press-2.png",
          demo: { type: "sequence" },
          steps: [
            "坐姿（或站姿），双手各持哑铃举至肩部高度，掌心朝前，肘部微屈约90°",
            "核心收紧、腰背挺直，沉肩",
            "呼气，三角肌发力将哑铃垂直向上推起至手臂接近伸直（不锁死）",
            "顶端稍作停顿，吸气缓慢下放回肩部位置",
            "全程躯干稳定，不利用腰部顶起借力"
          ],
          tips: {
            good: ["垂直向上推，轨迹笔直", "沉肩避免斜方肌代偿", "顶部锁定前微屈保护关节"],
            mistakes: [
              "腰部过度反弓/身体后仰→借力且伤腰",
              "推起时耸肩→斜方肌代偿",
              "下放过低→肩关节压力过大",
              "肘部锁死→肘关节损伤"
            ]
          }
        },
        {
          id: "lateral-raise",
          name: "哑铃侧平举",
          en: "Dumbbell Lateral Raise",
          target: ["三角肌中束"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dumbbell-lateral-raises-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/3/35/Dumbbell-lateral-raises-2.png",
          demo: { type: "sequence" },
          steps: [
            "站姿，双手各持轻哑铃垂于体侧，肘部微屈",
            "核心收紧、沉肩，想象双手各端一杯水",
            "呼气，三角肌中束发力带动大臂沿体侧向两侧抬起至与肩同高（或略低）",
            "肘部带动而非手腕/大臂甩动",
            "顶峰稍停顿，吸气缓慢有控制地下放"
          ],
          tips: {
            good: ["重量要轻，感受三角肌发力", "举至肩高即可，避免肩峰撞击", "全程保持肘部微屈角度不变"],
            mistakes: [
              "耸肩借力→斜方肌代偿（最常见的错误）",
              "抬举过高超过肩→肩峰撞击",
              "用手臂/惯性甩动→三角肌没感觉",
              "重量过重→动作变形"
            ]
          }
        },
        {
          id: "front-raise",
          name: "哑铃前平举",
          en: "Dumbbell Front Raise",
          target: ["三角肌前束"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dumbbell-front-raises-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Dumbbell-front-raises-2.png",
          demo: { type: "sequence" },
          steps: [
            "站姿，双手各持哑铃置于大腿前侧，掌心朝后",
            "核心收紧、身体稳定不晃动",
            "呼气，三角肌前束发力将哑铃向前平举至与肩同高",
            "顶端稍作停留，吸气缓慢下放还原",
            "可双手同时或交替进行"
          ],
          tips: {
            good: ["前举至肩高即可，不必过高", "手肘微屈，保持固定角度", "不耸肩、不借助惯性"],
            mistakes: [
              "身体前后晃动借力→甩上去",
              "抬举过高→肩部压力大",
              "耸肩→斜方肌代偿",
              "肘关节完全伸直→增加压力"
            ]
          }
        },
        {
          id: "rear-delt-fly",
          name: "俯身反向飞鸟",
          en: "Bent-Over Reverse Fly",
          target: ["三角肌后束", "菱形肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/0/03/Bent-over-cable-lateral-raises-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/3/31/Bent-over-cable-lateral-raises-2.png",
          demo: { type: "sequence" },
          steps: [
            "俯身（上半身前倾，背部平直），双手各持轻哑铃自然下垂",
            "核心收紧、背部保持平直，不弓背",
            "呼气，双臂向身体两侧上方打开，如鸟儿展翅",
            "挤压肩胛骨、感受后肩收紧，抬至与背接近同一平面",
            "吸气缓慢下放还原"
          ],
          tips: {
            good: ["重要动作，改善圆肩驼背", "重量轻，后肩发力为主", "挤压肩胛骨而非耸肩"],
            mistakes: [
              "弓背→背部和颈椎压力大",
              "耸肩→斜方肌代偿",
              "双臂过度后展→肩关节不适",
              "用惯性甩动→后束没感觉"
            ]
          }
        }
      ]
    },
    {
      id: "back",
      name: "背",
      en: "BACK",
      color: "#1677ff",
      subtitle: "硬朗背阔肌 · 拉力为主",
      motiv: "练出厚背，告别圆肩驼背",
      icon: "🔵",
      exercises: [
        {
          id: "barbell-row",
          name: "杠铃划船",
          en: "Barbell Row",
          target: ["背阔肌", "菱形肌", "斜方肌", "肱二头肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/a/af/Barbell-rear-delt-row-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/a/af/Barbell-rear-delt-row-2.png",
          demo: {
            type: "video",
            src: "https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_do_a_T-Bar_Row_in_strength_training_workouts.webm",
            poster: "https://upload.wikimedia.org/wikipedia/commons/a/af/Barbell-rear-delt-row-1.png"
          },
          steps: [
            "双脚与肩同宽站立，膝盖微屈，双手正握杠铃、握距略宽于肩",
            "屈髋俯身约45°（保持脊柱中立），杠铃悬于体前",
            "收紧核心，肩胛下沉",
            "呼气，背阔肌发力，将杠铃沿大腿拉向下腹部/下胸，肘部贴近体侧",
            "顶峰挤压肩胛1秒，吸气缓慢下放至手臂伸直"
          ],
          tips: {
            good: ["主轴是髋部铰链而非弯腰", "肘部靠近肋骨、拉向腹部", "用背发力，想象手臂只是钩子"],
            mistakes: [
              "弓背弯腰→腰椎压力激增、椎间盘风险",
              "身体上下摆动借力→变成直立划船",
              "拉杠过高到胸部→肩部紧张",
              "耸肩、肘部过度外展→训练部位错误",
              "利用惯性甩动→欺骗动作"
            ]
          }
        },
        {
          id: "pull-up",
          name: "引体向上",
          en: "Pull-Up",
          target: ["背阔肌", "大圆肌", "肱二头肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Climbers-chin-up-1.png",
          demo: { type: "image" },
          steps: [
            "双手正握单杠，握距略宽于肩，手臂伸直悬垂",
            "收紧核心、肩胛下沉后缩，身体微后仰",
            "呼气，背阔肌发力，将身体拉起，下巴超过单杠",
            "顶端收缩背肌稍作停留",
            "吸气缓慢控制下放至手臂接近伸直"
          ],
          tips: {
            good: ["用背发力，避免硬拉手臂", "全程控制，勿摆动借力", "下放充分以拉伸背阔肌"],
            mistakes: [
              "摆动身体借力（踢腿/甩腰）→效果大打折扣",
              "半程幅度→背阔肌刺激不足",
              "耸肩缩颈→斜方肌代偿、肩部压力",
              "下放过快砸下→易拉伤肩部"
            ]
          }
        },
        {
          id: "lat-pulldown",
          name: "高位下拉",
          en: "Lat Pulldown",
          target: ["背阔肌", "大圆肌", "肱二头肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Close-grip-front-lat-pull-down-1.png",
          demo: { type: "image" },
          steps: [
            "坐在高位下拉器械上，双手宽握横杆，双腿固定",
            "躯干微微后倾，挺胸、肩胛下沉",
            "呼气，背阔肌发力将横杆拉向下巴/上胸方向",
            "肘部向下向后，挤压背阔肌",
            "吸气缓慢上放，感受背阔肌拉伸"
          ],
          tips: {
            good: ["想象把肘部拉向体侧", "挺胸沉肩，肩胛活动充分", "横杆拉至锁骨/上胸附近"],
            mistakes: [
              "身体过分后仰→变成划船借力",
              "拉杆到颈后→肩关节压力大",
              "耸肩→斜方肌代偿",
              "幅度太短→背阔肌刺激不足"
            ]
          }
        },
        {
          id: "deadlift",
          name: "硬拉",
          en: "Deadlift",
          target: ["腘绳肌", "臀大肌", "竖脊肌", "背阔肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/1/11/Dead-lifts-1.png",
          demo: {
            type: "video",
            src: "https://upload.wikimedia.org/wikipedia/commons/6/62/Deadlift_-_exercise_demonstration_video.webm",
            poster: "https://upload.wikimedia.org/wikipedia/commons/1/11/Dead-lifts-1.png"
          },
          steps: [
            "双脚与髋同宽站立，杠铃位于足中正上方、紧贴小腿",
            "俯身正握杠铃，手臂伸直，挺胸收腹、背部保持中立",
            "深吸一口气绷紧全身，臀部降低",
            "脚蹬地，髋、膝同时伸展，将杠铃紧贴身体沿腿拉起",
            "站直后收缩臀部，不过度后仰，控制性下放"
          ],
          tips: {
            good: ["杠铃全程贴腿，保持背部中立", "想象脚把地面蹬开", "每次下放都回到地面再起（力量举式更安全）"],
            mistakes: [
              "弓背/弯腰→椎间盘高压、严重伤腰",
              "伸膝过早/臀部先起→动作变形",
              "回杠砸地→失去控制",
              "杠铃远离身体→腰部代偿"
            ]
          }
        }
      ]
    },
    {
      id: "leg",
      name: "腿",
      en: "LEGS",
      color: "#52c41a",
      subtitle: "强壮下肢 · 复合为王",
      motiv: "下肢强壮，人生才站得稳",
      icon: "🟢",
      exercises: [
        {
          id: "squat",
          name: "杠铃深蹲",
          en: "Barbell Back Squat",
          target: ["股四头肌", "臀大肌", "腘绳肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Squats-1.png",
          demo: { type: "image" },
          steps: [
            "杠铃置于斜方肌上部（高杠位），双手握杠、肩胛后收",
            "双脚与肩同宽，脚尖微微外展15-30°，核心收紧",
            "髋部先向后坐（而非直接下蹲），膝盖方向与脚尖一致",
            "下蹲至大腿与地面平行或略低，脚跟始终踩实",
            "脚跟发力、伸髋伸膝站起至完全直立"
          ],
          tips: {
            good: ["眼睛平视前方，脊柱中立", "膝盖与脚尖方向一致", "脚跟踩实，重心在足中"],
            mistakes: [
              "膝盖内扣→增加膝关节扭伤风险",
              "弓背/过度挺腰→腰部受伤",
              "脚跟离地→重心前移、易失衡",
              "半程蹲→股四头肌刺激不足"
            ]
          }
        },
        {
          id: "romanian-deadlift",
          name: "罗马尼亚硬拉",
          en: "Romanian Deadlift",
          target: ["腘绳肌", "臀大肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Romanian-deadlift-1.png",
          coverAlt: "https://upload.wikimedia.org/wikipedia/commons/5/58/Romanian-deadlift-2.png",
          demo: { type: "sequence" },
          steps: [
            "站姿，双手正握杠铃置于大腿前方，挺胸收腹，膝盖微屈",
            "保持背部中立，以髋为轴，臀部向后推（髋部铰链）",
            "杠铃紧贴大腿下滑，感受腘绳肌拉伸",
            "下放至腘绳肌有明显牵拉感（或杠铃到小腿）",
            "臀部发力向前顶，回到直立姿势"
          ],
          tips: {
            good: ["全程背部中立、膝盖角度基本不变", "臀向后推而非弯腰", "重点感受腘绳肌与臀部拉伸/收缩"],
            mistakes: [
              "弯腰弓背→伤腰",
              "膝盖过度屈曲→变相成为深蹲",
              "杠铃远离身体→腰部负担大",
              "耸肩、颈前伸→姿势失衡"
            ]
          }
        },
        {
          id: "leg-press",
          name: "腿举",
          en: "Leg Press",
          target: ["股四头肌", "臀大肌", "腘绳肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Leg-press-1-1024x670.png",
          demo: {
            type: "video",
            src: "https://upload.wikimedia.org/wikipedia/commons/e/e2/How_to_properly_leg_press.webm",
            poster: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Leg-press-1-1024x670.png"
          },
          steps: [
            "坐于腿举机上，双脚与肩同宽踩实踏板，调整好座椅角度",
            "臀部、下背贴紧靠垫，核心收紧",
            "解锁安全扣，控制性下放踏板，双膝弯曲",
            "弯至大腿与小腿约90°（或膝盖接近胸口，视活动度）",
            "脚跟发力蹬起踏板，至膝盖接近伸直但不锁死"
          ],
          tips: {
            good: ["背部全程贴紧靠垫", "膝盖与脚尖方向一致", "到达顶部微屈保护膝盖"],
            mistakes: [
              "下放过深→腰部离开靠垫、压力大",
              "背部弓起离开靠垫→伤腰",
              "膝盖内扣→膝关节受力",
              "顶部膝盖锁死→膝关节损伤"
            ]
          }
        },
        {
          id: "lunge",
          name: "哑铃箭步蹲",
          en: "Dumbbell Lunge",
          target: ["股四头肌", "臀大肌", "腘绳肌"],
          cover: "https://upload.wikimedia.org/wikipedia/commons/5/55/Lunges-1.png",
          demo: { type: "image" },
          steps: [
            "站姿，双手各持哑铃垂于体侧，核心收紧",
            "向前迈出一大步，前腿屈膝下蹲，后腿膝盖下沉接近地面",
            "前腿膝盖对准脚尖方向，身体保持直立、不前后倾",
            "下蹲至前腿大腿与地面平行",
            "前脚蹬地发力，回到起始站立位置，换腿交替"
          ],
          tips: {
            good: ["前腿膝盖不超脚尖过多", "后腿膝盖接近地面但不触地", "躯干稳定、视线向前"],
            mistakes: [
              "膝盖内扣→膝关节压力大",
              "前倾过度→腰部负担",
              "迈步幅度过小→变成原地蹲",
              "重心不稳摇晃→平衡失当"
            ]
          }
        }
      ]
    },
    {
      id: "stretch",
      name: "拉伸",
      en: "STRETCH",
      color: "#b388ff",
      subtitle: "26个动作 · 训练前热身与训练后放松 · 按部位自下而上",
      motiv: "拉伸是给身体的温柔收尾，也是唤醒柔韧的开始",
      icon: "🤸",
      exercises: [
        {
          id: "stretch-01",
          name: "前脚抬起小腿拉伸",
          en: "Calf Stretch",
          target: ["小腿后侧腓肠肌", "比目鱼肌"],
          cover: "assets/images/stretch-01.png",
          demo: { type: "image" },
          steps: [
            "前脚脚跟着地、脚尖抬起，另一腿屈膝支撑",
            "目标腿放在前方并保持脚跟着地；从髋部微微前倾，双手可扶目标侧小腿",
            "脚尖朝上，膝盖保留少量弯曲；重心留在后腿，前脚脚跟压稳"
          ],
          tips: {
            good: ["拉感在小腿后侧即可", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用手强压膝盖", "含胸弓腰", "把脚踝勾到疼痛"]
          }
        },
        {
          id: "stretch-02",
          name: "扶墙站姿股四头肌拉伸",
          en: "Standing Quad Stretch",
          target: ["大腿前侧股四头肌"],
          cover: "assets/images/stretch-02.png",
          demo: { type: "image" },
          steps: [
            "一手扶稳固支撑，另一手握同侧脚踝",
            "屈膝将脚跟缓慢带向臀部；双膝尽量靠近，支撑腿微屈",
            "收住肋骨并轻轻后收骨盆，站稳后再拉脚踝"
          ],
          tips: {
            good: ["大腿保持向下，拉感集中在大腿前侧", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["膝盖向外张", "腰部后仰", "拉着脚尖扭转踝关节"]
          }
        },
        {
          id: "stretch-03",
          name: "四点跪姿股四头肌拉伸",
          en: "Quadruped Quad Stretch",
          target: ["大腿前侧股四头肌"],
          cover: "assets/images/stretch-03.png",
          demo: { type: "image" },
          steps: [
            "四点跪姿，一手支撑，另一手抓同侧脚踝",
            "抬起一侧小腿并抓住脚踝；脚跟缓慢靠向臀部",
            "保持两侧骨盆高度接近，支撑手和对侧膝稳定推地"
          ],
          tips: {
            good: ["腹部轻收，目标大腿尽量不向外张", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["身体塌向一侧", "拉脚尖扭踝", "支撑腕疼痛仍继续"]
          }
        },
        {
          id: "stretch-04",
          name: "深蹲髋内收肌拉伸",
          en: "Deep Squat Adductor Stretch",
          target: ["大腿内侧内收肌群"],
          cover: "assets/images/stretch-04.png",
          demo: { type: "image" },
          steps: [
            "宽站距深蹲，双脚略向外，下蹲至可控制深度",
            "双肘放在双膝内侧，轻轻向外打开膝盖",
            "胸口抬起，脚掌完整贴地，髋部向下沉"
          ],
          tips: {
            good: ["膝盖与脚尖同向，双脚均匀推地", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["膝盖内扣", "脚跟抬起", "用肘猛烈顶膝"]
          }
        },
        {
          id: "stretch-05",
          name: "坐姿蝴蝶式内收肌拉伸",
          en: "Seated Butterfly Stretch",
          target: ["大腿内侧及髋内收肌群"],
          cover: "assets/images/stretch-05.png",
          demo: { type: "image" },
          steps: [
            "坐姿，脚掌相对，双膝向外打开",
            "双手放在身体前方支撑；坐直后从髋部微微前倾",
            "让双膝自然下沉，坐骨均匀压地，胸口向前"
          ],
          tips: {
            good: ["双腿主动放松", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用手压膝", "弹震", "背部过度弓曲"]
          }
        },
        {
          id: "stretch-06",
          name: "仰卧单腿外展内收肌拉伸",
          en: "Lying Single-Leg Adductor Stretch",
          target: ["大腿内侧及髋前内侧"],
          cover: "assets/images/stretch-06.png",
          demo: { type: "image" },
          steps: [
            "仰卧，一腿伸直，另一腿屈膝向外打开",
            "屈曲腿脚掌靠近对侧大腿；同侧手轻扶膝外侧",
            "让膝盖在重力作用下缓慢向外下降"
          ],
          tips: {
            good: ["两侧骨盆保持贴垫，腹部放松，以髋内侧温和拉感为准", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用手强压膝盖", "骨盆翻向一侧", "髋前出现夹痛"]
          }
        },
        {
          id: "stretch-07",
          name: "站姿前屈大腿后侧拉伸",
          en: "Standing Forward Fold",
          target: ["腘绳肌群及臀后侧"],
          cover: "assets/images/stretch-07.png",
          demo: { type: "image" },
          steps: [
            "双脚约与髋同宽，膝盖微屈",
            "先把臀部向后推，再从髋部缓慢前屈；双臂自然下垂",
            "在大腿后侧出现拉感时停止下降"
          ],
          tips: {
            good: ["保持脊柱自然延长，腹部轻收，主要折叠点在髋部", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["锁膝", "弹震", "为了碰地面而过度弓背"]
          }
        },
        {
          id: "stretch-08",
          name: "前伸腿站姿腘绳肌拉伸",
          en: "Split-Squat Hamstring Stretch",
          target: ["大腿后侧腘绳肌群"],
          cover: "assets/images/stretch-08.png",
          demo: { type: "image" },
          steps: [
            "一脚向前伸，脚跟着地，后腿屈膝",
            "前腿膝盖微屈，脚尖朝上；双手轻扶大腿",
            "从髋部向前倾，臀部向后坐，背部拉长"
          ],
          tips: {
            good: ["前腿脚跟压地，拉感集中在前腿大腿后侧", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["双手压膝", "圆背低头", "前脚向外旋转"]
          }
        },
        {
          id: "stretch-09",
          name: "半跪坐后大腿后侧拉伸",
          en: "Half-Kneeling Hamstring Stretch",
          target: ["腘绳肌群"],
          cover: "assets/images/stretch-09.png",
          demo: { type: "image" },
          steps: [
            "一膝跪垫，另一腿向前伸直、脚尖朝上",
            "臀部缓慢向后移；骨盆轻微前倾",
            "双手放在地面或瑜伽砖上支撑，胸口向前延伸"
          ],
          tips: {
            good: ["先向后坐再前倾，保持前腿膝盖不过度锁死", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["塌腰够脚", "跪膝直接压硬地", "弹动身体"]
          }
        },
        {
          id: "stretch-10",
          name: "坐姿双腿前伸拉伸",
          en: "Seated Forward Fold",
          target: ["腘绳肌群及小腿后侧"],
          cover: "assets/images/stretch-10.png",
          demo: { type: "image" },
          steps: [
            "坐姿，双腿向前伸，膝盖可微屈",
            "坐骨压地，脚尖朝上；从髋部向前倾",
            "双手扶小腿或脚踝，保持胸口向前"
          ],
          tips: {
            good: ["腹部轻收、背部延长，拉感在大腿后侧而不是腰部挤压", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用手猛拉脚尖", "膝盖锁死", "头部用力向膝盖靠"]
          }
        },
        {
          id: "stretch-11",
          name: "低位弓步臀髋拉伸",
          en: "Low Lunge Hip Stretch",
          target: ["前腿臀肌及髋外旋肌群"],
          cover: "assets/images/stretch-11.png",
          demo: { type: "image" },
          steps: [
            "双手撑垫，前腿屈曲放在身体下方，后腿向后伸",
            "调整前脚与膝的位置至髋部舒适；后腿向后延伸",
            "躯干逐步降低，肘部可在能力范围内接近地面"
          ],
          tips: {
            good: ["骨盆尽量朝前并均匀受力，呼气逐渐放松臀部", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["强压前膝", "骨盆明显歪斜", "膝前侧疼痛"]
          }
        },
        {
          id: "stretch-12",
          name: "仰卧四字式臀部拉伸",
          en: "Reclined Figure-4 Glute Stretch",
          target: ["臀大肌", "臀中肌及髋外旋肌"],
          cover: "assets/images/stretch-12.png",
          demo: { type: "image" },
          steps: [
            "仰卧，将一侧脚踝搭在另一侧大腿上",
            "双手抱住支撑腿大腿后侧，将支撑腿缓慢拉向胸前",
            "目标侧膝自然向外打开，脚踝保持回勾"
          ],
          tips: {
            good: ["头肩放松贴地，脚踝回勾以保护膝部", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["直接压目标侧膝盖", "抱住膝关节用力拉", "抬头憋气"]
          }
        },
        {
          id: "stretch-13",
          name: "仰卧单膝抱胸",
          en: "Lying Single Knee-to-Chest",
          target: ["臀大肌及腰背周围软组织"],
          cover: "assets/images/stretch-13.png",
          demo: { type: "image" },
          steps: [
            "仰卧，一腿伸直，另一腿屈曲",
            "双手抱住屈曲腿的大腿后侧或小腿上端",
            "将膝盖缓慢靠向胸口，另一腿保持放松"
          ],
          tips: {
            good: ["骶骨和头部留在垫上，呼气时轻轻增加靠近幅度", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["强压膝关节", "抬头含胸", "出现向腿部放射的疼痛仍继续"]
          }
        },
        {
          id: "stretch-14",
          name: "仰卧屈膝脊柱旋转",
          en: "Lying Knee-Drop Spine Twist",
          target: ["胸腰椎活动度", "臀部及躯干侧面"],
          cover: "assets/images/stretch-14.png",
          demo: { type: "image" },
          steps: [
            "仰卧，双臂打开，一膝屈曲跨向对侧",
            "肩胛骨保持贴地；屈曲腿缓慢落向身体对侧",
            "视线可转向相反方向，保持顺畅呼吸"
          ],
          tips: {
            good: ["先收紧腹部稳定，再让骨盆缓慢旋转，幅度以肩不离地为准", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用手强压膝盖", "肩膀抬起", "腰腿放射痛"]
          }
        },
        {
          id: "stretch-15",
          name: "俯卧撑起腹部拉伸",
          en: "Prone Abdominal Stretch",
          target: ["腹直肌及躯干前侧"],
          cover: "assets/images/stretch-15.png",
          demo: { type: "image" },
          steps: [
            "俯卧，双手放在胸口两侧",
            "手掌轻推地面抬起胸口；骨盆和大腿保持贴垫",
            "肩膀远离耳朵，视线向前下方"
          ],
          tips: {
            good: ["臀部轻收、胸口向前上方延伸，幅度以腹前侧拉开且腰部舒适为准", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["肘部完全锁死", "耸肩", "腰部夹痛仍继续抬高"]
          }
        },
        {
          id: "stretch-16",
          name: "站姿侧屈拉伸",
          en: "Standing Side Bend",
          target: ["背阔肌及腹斜肌"],
          cover: "assets/images/stretch-16.png",
          demo: { type: "image" },
          steps: [
            "站姿，一手叉腰，另一臂举过头顶",
            "吸气向上延伸举起的手臂；呼气时躯干缓慢向对侧侧屈",
            "骨盆保持居中，胸口朝前"
          ],
          tips: {
            good: ["先向上拔长再侧弯，重点让肋骨到骨盆之间拉开", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["身体前倾或旋转", "塌腰", "用手压头"]
          }
        },
        {
          id: "stretch-17",
          name: "跪姿侧向延伸背阔肌",
          en: "Kneeling Lat Side Stretch",
          target: ["背阔肌及躯干侧面"],
          cover: "assets/images/stretch-17.png",
          demo: { type: "image" },
          steps: [
            "跪姿臀部靠近脚跟，一臂斜向前方伸长",
            "一侧前臂支撑地面；另一臂沿地面斜向前伸",
            "臀部持续向后坐，胸口轻轻下沉"
          ],
          tips: {
            good: ["伸长侧手掌主动向远处延伸，保持同侧髋部向后", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["骨盆抬高", "身体翻转", "肩关节锐痛"]
          }
        },
        {
          id: "stretch-18",
          name: "器械架辅助弓步开胸",
          en: "Lunge Chest Opener",
          target: ["胸大肌及胸小肌相关区域"],
          cover: "assets/images/stretch-18.png",
          demo: { type: "image" },
          steps: [
            "前后分腿站，一侧前臂扶固定器械立柱",
            "支撑侧肘约弯曲90度并低于或接近肩高",
            "身体缓慢向前并略微转离支撑臂，保持肩膀下沉"
          ],
          tips: {
            good: ["前脚稳定发力，胸廓轻轻转开，拉感应在胸前而非肩关节前方", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["肘位过高", "耸肩", "用腰部后仰代偿"]
          }
        },
        {
          id: "stretch-19",
          name: "半跪姿胸椎旋转开胸",
          en: "Half-Kneeling Spine Rotation",
          target: ["胸椎活动度", "胸大肌及肩前侧"],
          cover: "assets/images/stretch-19.png",
          demo: { type: "image" },
          steps: [
            "半跪姿靠墙，双臂在肩高打开",
            "骨盆朝前稳定；双臂展开成一条直线",
            "胸廓缓慢转向前腿一侧，视线跟随转动手"
          ],
          tips: {
            good: ["转动主要发生在中上背，前脚和跪膝共同稳住骨盆", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用腰部扭转", "前膝内扣", "肩膀耸起"]
          }
        },
        {
          id: "stretch-20",
          name: "跪姿侧向沉肩拉伸",
          en: "Kneeling Lateral Shoulder Opener",
          target: ["胸前", "肩前侧及胸椎旋转"],
          cover: "assets/images/stretch-20.png",
          demo: { type: "image" },
          steps: [
            "四点跪姿，一侧手臂向外侧伸展",
            "支撑手稳住身体；目标侧手臂向侧方延伸",
            "胸口逐渐向地面靠近，头颈保持放松"
          ],
          tips: {
            good: ["骨盆留在膝盖上方，移动来自胸廓和肩胛周围", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["把体重直接压在肩关节上", "腰部跟着大幅旋转"]
          }
        },
        {
          id: "stretch-21",
          name: "跪姿胸椎旋转准备式",
          en: "Kneeling Spine Rotation Prep",
          target: ["胸椎及肩胛周围"],
          cover: "assets/images/stretch-21.png",
          demo: { type: "image" },
          steps: [
            "四点跪姿，一臂向侧方放低",
            "膝盖位于髋下；支撑手推地；另一臂向侧方伸展",
            "逐渐降低胸口，为穿针式旋转建立可控起始位"
          ],
          tips: {
            good: ["骨盆保持正对地面，胸廓缓慢旋转，呼吸均匀", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用颈部承担重量", "臀部明显侧移", "动作过快"]
          }
        },
        {
          id: "stretch-22",
          name: "四点跪姿穿针式",
          en: "Quadruped Thread-the-Needle",
          target: ["三角肌后束", "肩胛周围及胸椎"],
          cover: "assets/images/stretch-22.png",
          demo: { type: "image" },
          steps: [
            "四点跪姿，一臂从支撑臂下方穿过",
            "目标臂掌心朝上穿过身体下方；肩膀和头侧轻触垫面",
            "另一臂向前延伸或留在支撑位"
          ],
          tips: {
            good: ["臀部尽量保持在膝盖上方，通过上背旋转延长目标侧后肩", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["把全部体重压在颈部", "骨盆倒向一侧", "强压肩关节"]
          }
        },
        {
          id: "stretch-23",
          name: "站姿横臂后肩拉伸",
          en: "Cross-Body Rear Delt Stretch",
          target: ["三角肌后束及肩后侧"],
          cover: "assets/images/stretch-23.png",
          demo: { type: "image" },
          steps: [
            "站姿，双脚与髋同宽",
            "一侧手臂伸直横过胸前；另一侧前臂托住上臂靠近肘部的位置",
            "轻轻向胸口带，躯干始终朝前"
          ],
          tips: {
            good: ["肩胛骨保持自然，不耸肩；力量来自辅助臂缓慢内收", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["身体跟着旋转", "把手臂猛拉到疼痛"]
          }
        },
        {
          id: "stretch-24",
          name: "器械架辅助肱二头肌拉伸",
          en: "Machine-Assisted Biceps Stretch",
          target: ["肱二头肌及肩前侧"],
          cover: "assets/images/stretch-24.png",
          demo: { type: "image" },
          steps: [
            "背向固定横杆，一手在身后握住支撑",
            "目标臂向后伸直，掌心尽量朝外或朝上",
            "身体小步向前并轻微转离目标臂，保持肩膀自然"
          ],
          tips: {
            good: ["手只作固定点，双腿承担体重，动作幅度小而连续", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用手臂悬挂身体", "肘关节反弓", "肩前夹痛"]
          }
        },
        {
          id: "stretch-25",
          name: "坐姿过顶肱三头肌拉伸",
          en: "Seated Overhead Triceps Stretch",
          target: ["肱三头肌及背阔肌上部"],
          cover: "assets/images/stretch-25.png",
          demo: { type: "image" },
          steps: [
            "坐姿，一臂举过头顶并屈肘",
            "目标侧手掌落向上背部；另一手扶目标肘部",
            "轻轻向后下方引导，保持躯干直立"
          ],
          tips: {
            good: ["目标侧肘尖朝上，肋骨收住，肩膀远离耳朵", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["用力压头", "腰部后仰", "肩部夹痛"]
          }
        },
        {
          id: "stretch-26",
          name: "站姿腕屈肌拉伸",
          en: "Standing Wrist Flexor Stretch",
          target: ["前臂掌侧及腕屈肌群"],
          cover: "assets/images/stretch-26.png",
          demo: { type: "image" },
          steps: [
            "站姿，一臂向前伸直",
            "掌心朝前、手指向下；另一手包住手掌和手指",
            "缓慢将手指带向身体方向，保持目标侧肘部舒适伸直"
          ],
          tips: {
            good: ["固定前臂，只让手腕产生温和背伸，感受前臂掌侧拉长", "保持 15–30 秒，每侧 1–2 轮"],
            mistakes: ["锁死肘关节", "只掰单根手指", "手指麻木仍继续"]
          }
        }
      ]
    }
  ]
};
