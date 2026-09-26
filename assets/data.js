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
    subtitle: "胸 · 肩 · 背 · 腿 四大板块 · 标准动作要领与常见易错点解析",
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
    }
  ]
};
