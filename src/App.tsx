import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Users, 
  BarChart3, 
  MessageSquare, 
  ChevronDown,
  HelpCircle,
  Clock,
  Layout,
  Trophy,
  Zap,
  Target,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tighter text-blue-600">INCRUIT</span>
          <span className="text-gray-200 text-lg">|</span>
          <span className="text-lg font-bold text-gray-900 tracking-tight">모의평가 × 바로코칭</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#solution" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">프로그램</a>
          <a href="#process" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">진행절차</a>
          <a href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">요금안내</a>
          <a href="#faq" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
        </div>
        <button 
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          무료 진단 신청
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            인크루트 AI 모의평가 + 면접관 출신 1:1 코칭
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            평가는 AI가,<br />합격은 사람이 만듭니다
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            인크루트 모의평가로 내 실력의 좌표를 확인하고,<br className="hidden md:block" />
            실제 채용을 진행했던 면접관 출신 코치와 함께 부족한 그 지점만 정확히 채웁니다.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: <Users className="w-5 h-5" />, text: "누적 응시 4,100+ 기업 채용전형 기반" },
            { icon: <Trophy className="w-5 h-5" />, text: "현직/전직 면접관 코치진" },
            { icon: <Zap className="w-5 h-5" />, text: "자소서 → 인적성 → 면접 원스톱" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-blue-600">{item.icon}</div>
              <span className="text-sm font-bold text-gray-700">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200">
            모의평가 신청하고 리포트 받기
          </button>
          <button className="w-full sm:w-auto bg-white text-gray-900 px-10 py-5 rounded-2xl text-lg font-bold border border-gray-200 hover:border-gray-300 transition-all">
            내 상황 무료 진단받기 (3분)
          </button>
        </div>
        <p className="text-sm text-gray-400 font-medium">첫 진단 상담은 비용이 발생하지 않습니다.</p>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const points = [
    "자소서를 20개 넘게 썼는데 서류 합격률이 10%도 안 된다",
    "내 답변이 왜 떨어졌는지 피드백을 받아본 적이 없다",
    "인적성·직무적합도 검사에서 매번 컷을 못 넘긴다",
    "모의면접을 해봤지만 \"잘했어요\" 말고 들은 게 없다",
    "대기업/공기업/금융권 중 어디를 준비해야 할지 모르겠다"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">왜 계속 서류에서, 면접에서 멈출까요?</h2>
          <p className="text-xl text-gray-600">열심히 안 한 게 아닙니다. '어디가 문제인지'를 아무도 알려주지 않았을 뿐입니다.</p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-gray-200 border border-gray-100">
          <div className="space-y-4 mb-12">
            {points.map((point, i) => (
              <label key={i} className="flex items-start gap-4 p-5 rounded-2xl hover:bg-blue-50/50 cursor-pointer transition-all border border-transparent hover:border-blue-100 group">
                <div className="relative mt-1">
                  <input type="checkbox" className="w-6 h-6 rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700 group-hover:text-gray-900 leading-snug">{point}</span>
              </label>
            ))}
          </div>
          <div className="text-center pt-10 border-t border-gray-100">
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
              2개 이상 체크했다면, 지금 필요한 건 '더 많은 지원'이 아니라 <br className="hidden md:block" />
              <span className="inline-block relative">
                <span className="relative z-10 text-blue-600 italic px-1">정확한 진단</span>
                <span className="absolute bottom-1 left-0 right-0 h-4 bg-blue-100 -z-0 rounded-sm" />
              </span>
              입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionOverview = () => {
  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">진단하고, 교정합니다. 두 단계면 충분합니다.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* STEP 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-[100px] -mr-12 -mt-12 transition-transform group-hover:scale-110" />
            <div className="relative">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-md mb-6 uppercase tracking-[0.2em]">STEP 01</span>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">인크루트 AI 모의평가</h3>
              <p className="text-blue-600 font-bold text-lg mb-10 italic">내 위치를 숫자로 확인</p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "실제 대기업 공채 프로세스 그대로 옮긴 '무한그룹' 가상기업 전형 응시",
                  "지원서 작성 → 인적성 → 직무역량 → AI 면접까지 실전 순서 그대로 경험",
                  "응시 즉시 합격 가능성 리포트 제공 (Pass/Fail 및 항목별 피드백)"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 border-l-4 border-blue-500 pl-5 py-4 bg-blue-50/50 rounded-r-2xl">
                감이 아니라 데이터로, 내 현재 위치를 확인합니다.
              </p>
            </div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-[100px] -mr-12 -mt-12 transition-transform group-hover:scale-110" />
            <div className="relative">
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-md mb-6 uppercase tracking-[0.2em]">STEP 02</span>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">바로코칭 1:1 코칭</h3>
              <p className="text-indigo-600 font-bold text-lg mb-10 italic">그 격차를 사람이 메웁니다</p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "리포트에서 드러난 취약 항목만 골라 집중 코칭",
                  "실제 채용을 진행했던 면접관 출신 코치가 직접 첨삭·모의면접",
                  "지원 기업군(대기업/공기업/금융권)에 맞춘 전형별 맞춤 전략 수립"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <p className="font-bold text-gray-900 border-l-4 border-indigo-500 pl-5 py-4 bg-indigo-50/50 rounded-r-2xl">
                AI가 찾아낸 문제를, 사람이 해결합니다.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <button className="bg-gray-900 text-white px-12 py-6 rounded-[24px] text-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto group shadow-2xl shadow-gray-300">
            2단계 과정 한 번에 신청하기
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const MockEvaluationDetail = () => {
  const steps = [
    { title: "지원서 작성", desc: "이력서 및 자기소개서를 실전처럼 작성합니다" },
    { title: "서류 평가", desc: "채용 담당자 기준으로 서류 통과 여부를 판정합니다" },
    { title: "인적성 검사", desc: "실제 대기업 인적성 유형과 동일한 문항으로 응시합니다" },
    { title: "직무역량 평가", desc: "지원 직무별 역량 적합도를 정량 측정합니다" },
    { title: "AI 면접", desc: "AI가 답변 구조·표현·태도를 분석해 리포트를 제공합니다" }
  ];

  const jobs = [
    "백엔드 개발", "반도체 공정엔지니어", "자동차 기계설계", 
    "영업관리", "마케팅", "재무회계"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1128] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">실전 그대로의 채용 프로세스</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-70 font-medium">가상 대기업 '무한그룹'의 공개채용에 실제로 지원해봅니다. 연습이라는 걸 잊게 될 만큼, 실제와 같은 순서로 진행됩니다.</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-12 mb-20 no-scrollbar snap-x px-4 -mx-4">
          {steps.map((step, i) => (
            <div key={i} className="min-w-[280px] bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl snap-center flex flex-col justify-between hover:bg-white/10 transition-all">
              <div>
                <span className="text-blue-400 font-black text-xs mb-6 block tracking-widest">STEP 0{i + 1}</span>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Layout className="w-6 h-6 text-blue-400" />
              무한그룹 채용 직무 (신입채용)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jobs.map((job, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-default group">
                  <span className="text-xs font-bold text-blue-400/60 mb-2 block tracking-tight">무한그룹 채용</span>
                  <p className="font-bold text-lg group-hover:text-blue-400 transition-colors">{job} 부문</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10 md:p-12 text-gray-900 relative shadow-3xl">
            <div className="absolute top-8 right-8 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full tracking-widest">ANALYTICS</div>
            <h4 className="text-2xl font-black mb-10 text-gray-900">응시 후 받게 되는 것</h4>
            <ul className="space-y-6 mb-12">
              {[
                "전형 단계별 통과/탈락 판정 결과",
                "항목별 점수와 상대 위치(백분위)",
                "개선이 필요한 역량 Top 3",
                "바로코칭 연계 시, 이 리포트가 곧 코칭 커리큘럼이 됩니다"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-bold leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="text-sm text-gray-500 font-medium italic">리포트는 응시 완료 즉시 PDF로 발행되며, 대시보드에서 상시 확인할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-600/10 to-transparent -z-0" />
    </section>
  );
};

const CoachingDetail = () => {
  const programs = [
    {
      title: "자기소개서 코칭",
      features: [
        "문항별 의도 분석 후 소재 재설계",
        "직무 적합성이 드러나도록 경험 재구성",
        "실제 서류 평가 기준에 따른 첨삭 및 재첨삭"
      ],
      duration: "1회 60분 / 회차별 수정본 피드백 포함"
    },
    {
      title: "실전 면접 코칭",
      features: [
        "지원 기업 실제 면접 방식 맞춤 모의면접",
        "시선·톤·속도 등 전달력까지 교정",
        "압박 질문·꼬리 질문 대응 훈련"
      ],
      duration: "1회 60분 / 녹화 기반 리뷰 제공"
    },
    {
      title: "기업군별 합격 전략 설계",
      features: [
        "대기업 / 공기업 / 금융권별 평가 문법 적용",
        "본인 스펙에 맞는 지원 기업군 및 직무 설정",
        "채용 일정 기준 역산 준비 로드맵 제공"
      ],
      duration: "1회 60분"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">채점하던 사람이, 이제 당신 편에서 봅니다</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            바로코칭의 코치진은 대기업·공기업·금융기관에서 실제로 지원자를 평가하고 선발했던 사람들입니다. 무엇을 보고 붙였고 무엇 때문에 떨어뜨렸는지 알고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {programs.map((program, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-50 hover:shadow-2xl hover:border-blue-100 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {i === 0 ? <FileText className="w-6 h-6" /> : i === 1 ? <MessageSquare className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-8">{program.title}</h4>
                <ul className="space-y-4 mb-12">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-600 font-medium">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  <Clock className="w-3 h-3" />
                  DURATION
                </div>
                <p className="text-sm font-bold text-gray-900">{program.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <h4 className="text-3xl font-bold mb-12 text-center relative z-10">다른 코칭과 무엇이 다른가요?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              { title: "근거 있는 피드백", desc: "\"느낌\"이 아니라 모의평가 데이터에 기반해 코칭합니다" },
              { title: "평가자 시점", desc: "지원자 관점이 아닌, 실제 채점자 관점의 첨삭" },
              { title: "기업군 전문성", desc: "코치별 담당 기업군이 나뉘어 있어 매칭 후 배정됩니다" }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/10 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h5>
                <p className="text-sm opacity-60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "온라인 신청서 작성", detail: "희망 기업군·직무 선택", duration: "3분" },
    { title: "인크루트 모의평가 응시", detail: "가상 기업 전형 응시", duration: "약 90분" },
    { title: "평가 리포트 수령", detail: "응시 결과 분석서 확인", duration: "응시 후 즉시" },
    { title: "리포트 기반 무료 진단 상담", detail: "전문 컨설턴트 1:1 상담", duration: "20분" },
    { title: "담당 코치 매칭 및 일정 확정", detail: "기업군별 전문 코치 배정", duration: "1영업일 이내" },
    { title: "1:1 코칭 진행", detail: "리포트 기반 맞춤 코칭", duration: "회차별 60분" }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">신청부터 코칭까지, 이렇게 진행됩니다</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{step.title}</h4>
                <p className="text-sm text-gray-500 mb-4 font-medium">{step.detail}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-black text-gray-500 uppercase tracking-wider">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 font-bold text-sm tracking-tight">
            * 모의평가만 응시하고 종료하셔도 됩니다. 코칭은 리포트를 확인하신 뒤 선택하시면 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "모의평가 단독",
      items: ["모의평가 응시", "결과 리포트"],
      price: "별도문의",
      featured: false,
      cta: "선택하기"
    },
    {
      title: "진단 패키지",
      badge: "가장 인기",
      items: ["모의평가 + 리포트", "1:1 코칭 1회"],
      price: "패키지 특가",
      featured: true,
      cta: "상담 후 신청"
    },
    {
      title: "합격 패키지",
      items: ["모의평가 응시", "자소서 코칭 2회", "면접 코칭 2회"],
      price: "프리미엄",
      featured: false,
      cta: "상담 후 신청"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">필요한 만큼만 선택하세요</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[40px] border-2 transition-all relative flex flex-col justify-between ${
                plan.featured 
                ? "border-blue-600 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.2)] scale-105 z-10" 
                : "border-gray-100 hover:border-gray-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-200">
                  {plan.badge}
                </div>
              )}
              <div>
                <h4 className="text-2xl font-black text-gray-900 mb-10 text-center">{plan.title}</h4>
                <ul className="space-y-5 mb-12">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-4 text-gray-600 font-bold text-lg">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900 mb-8">{plan.price}</p>
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-5 rounded-[24px] font-black text-lg transition-all ${
                  plan.featured 
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-black mb-4">모의평가 응시자 한정, 코칭 연계 신청 시 할인 적용</h4>
            <p className="opacity-70 text-lg mb-10 font-medium">기간 및 할인율은 운영 정책에 따라 상이할 수 있습니다.</p>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-12 py-5 rounded-[24px] text-xl font-black hover:bg-blue-50 transition-all shadow-xl"
            >
              내 상황에 맞는 구성 상담받기
            </button>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-32 -mt-32 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-16 -mb-16 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      quote: "떨어진 이유를 처음으로 알았습니다",
      content: "리포트에서 직무역량 항목이 유독 낮게 나왔는데, 코칭에서 제 경험을 직무 언어로 바꾸는 법을 배웠습니다. 이후 지원한 3곳 모두 서류 합격했어요.",
      info: "25세, 전자·반도체 직무 지원"
    },
    {
      quote: "자소서를 처음부터 다시 썼습니다",
      content: "소재는 그대로인데 구성만 바꿨을 뿐인데 서류 결과가 달라졌습니다. 실제 평가자가 제 자소서를 어떻게 보는지 알게 된 게 가장 컸습니다.",
      info: "27세, 금융권 지원"
    },
    {
      quote: "면접에서 말이 꼬이지 않게 됐습니다",
      content: "녹화 리뷰로 제 말버릇을 처음 봤습니다. 그 이후로 답변 길이를 조절하고, 압박 질문에도 당황하지 않는 훈련을 반복한 덕분에 최종 합격했습니다.",
      info: "26세, 공기업 지원"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">먼저 경험한 사람들의 이야기</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100 relative"
            >
              <div className="relative z-10">
                <div className="mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-blue-500 text-xl">★</span>
                  ))}
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-6 italic leading-tight">"{review.quote}"</h4>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">{review.content}</p>
                <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-black text-xs shrink-0">
                    PASS
                  </div>
                  <span className="text-xs font-black text-gray-400 tracking-tight">{review.info}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-bold text-xs">
            * 본 후기는 실제 수강생의 동의를 얻어 작성되었으며, 개인의 상황에 따라 결과는 다를 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "모의평가만 응시하고 코칭은 신청하지 않아도 되나요?", a: "네. 모의평가와 리포트만 이용하셔도 됩니다. 코칭은 전적으로 선택 사항입니다." },
    { q: "모의평가는 얼마나 걸리나요?", a: "전 전형 응시 기준 약 90분 내외입니다. 바쁘신 경우 단계별로 끊어서 응시하실 수 있도록 설계되어 있습니다." },
    { q: "코치는 어떻게 배정되나요?", a: "신청 시 작성해주신 희망 기업군(대기업/공기업/금융권) 및 직무 카테고리를 분석하여, 해당 분야에서 실제 채용을 진행했던 경험이 있는 최적의 코치가 매칭됩니다." },
    { q: "대면인가요, 비대면인가요?", a: "기본적으로 Zoom이나 구글 미트를 활용한 비대면 화상 코칭으로 진행됩니다. 필요한 경우 사전 조율을 통해 대면 코칭으로 전환도 가능합니다." },
    { q: "신입만 가능한가요?", a: "신입 지원자뿐만 아니라 중고신입, 경력 이직을 준비하시는 분들 모두 가능합니다. 다만 모의평가 시스템은 대기업 신입 공채 프로세스를 표준 모델로 삼고 있습니다." },
    { q: "합격을 보장하나요?", a: "특정 기업의 합격을 물리적으로 보장할 수는 없습니다. 하지만 내가 왜 떨어졌는지, 어떤 역량을 강조해야 합격권에 드는지는 평가자의 시선에서 명확하게 알려드립니다." },
    { q: "환불이 되나요?", a: "코칭 예약 시간 24시간 전까지는 100% 환불이 가능합니다. 이후는 회차 소진 정책에 따라 정산됩니다." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-16 text-center tracking-tight">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg transition-colors ${openIndex === i ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`}>
                    Q
                  </div>
                  <span className="font-bold text-gray-900 text-lg leading-snug">{faq.q}</span>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 flex gap-6">
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center font-black text-lg text-gray-300">
                        A
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[150px] -z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">다음 공채까지, 아직 시간이 있습니다</h2>
        <p className="text-xl md:text-2xl opacity-60 mb-16 font-medium leading-relaxed">같은 방식으로 한 번 더 지원하면 결과도 같습니다.<br />무엇을 바꿔야 하는지부터 확인하세요.</p>

        <div className="bg-white rounded-[40px] p-8 md:p-16 text-gray-900 text-left shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-3">이름</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-600 outline-none transition-all font-bold text-lg" placeholder="성함 입력" />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-3">연락처</label>
                <input type="tel" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-600 outline-none transition-all font-bold text-lg" placeholder="010-0000-0000" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-3">희망 기업군</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-blue-600 transition-all appearance-none bg-white font-bold text-lg cursor-pointer">
                    <option>대기업</option>
                    <option>공기업</option>
                    <option>금융권</option>
                    <option>미정</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-3">희망 직무</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-600 outline-none transition-all font-bold text-lg" placeholder="예: 백엔드 개발자" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-3">상담 가능 시간대</label>
              <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-600 outline-none transition-all font-bold text-lg" placeholder="예: 평일 오후 6시 이후" />
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <input type="checkbox" id="terms" className="w-6 h-6 rounded-lg text-blue-600 focus:ring-blue-500 border-gray-300 mt-0.5 cursor-pointer" />
              <label htmlFor="terms" className="text-sm text-gray-500 font-bold leading-snug cursor-pointer">
                (필수) 개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 및 서비스 제공 목적으로만 활용되며, 안전하게 관리됩니다.
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-6 rounded-[24px] text-2xl font-black hover:bg-blue-700 transition-all shadow-2xl shadow-blue-400 group">
              <span className="flex items-center justify-center gap-3">
                무료 상담 및 신청하기
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-black text-gray-900 mb-8 tracking-tighter">
              <span className="text-blue-600">바로코칭</span>
              <span className="text-gray-200 mx-2">|</span>
              <span className="text-sm text-gray-400 font-bold">합격으로 가는 가장 빠른 길</span>
            </h4>
            <div className="space-y-5 text-sm text-gray-500 font-medium leading-relaxed">
              <p>대표자: 김대표 | 사업자등록번호: 000-00-00000 | 통신판매업 신고번호: 제2026-서울강남-0000호</p>
              <p>주소: 서울특별시 강남구 테헤란로 000 취업빌딩 7층 | 대표전화: 02-0000-0000 | 이메일: support@barocoaching.com</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6">
                <a href="#" className="font-black text-gray-900 underline decoration-gray-200 underline-offset-8 hover:decoration-blue-600 transition-all">이용약관</a>
                <a href="#" className="font-black text-gray-900 underline decoration-gray-200 underline-offset-8 hover:decoration-blue-600 transition-all">개인정보처리방침</a>
                <a href="#" className="font-black text-gray-900 underline decoration-gray-200 underline-offset-8 hover:decoration-blue-600 transition-all">환불정책</a>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-black text-gray-900 mb-8 text-xs uppercase tracking-widest">PARTNERSHIP</h5>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">본 과정은 대한민국 대표 채용 플랫폼 인크루트(Incruit) 모의평가 시스템과 바로코칭의 독점 제휴 프로그램입니다.</p>
          </div>

          <div>
            <h5 className="font-black text-gray-900 mb-8 text-xs uppercase tracking-widest">CHANNELS</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">공식 블로그</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">카카오톡 상담하기</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">유튜브 채널</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">인스타그램</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-gray-900 mb-8 text-xs uppercase tracking-widest">SUPPORT</h5>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="text-xs font-black text-gray-400 mb-2">고객센터 운영시간</p>
              <p className="text-sm font-bold text-gray-900">평일 09:00 - 18:00</p>
              <p className="text-[10px] text-gray-400 mt-2">주말 및 공휴일 휴무</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-gray-100">
          <p className="text-xs font-black text-gray-300 tracking-[0.2em]">© 2026 BAROCOACHING. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <SolutionOverview />
        <MockEvaluationDetail />
        <CoachingDetail />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <button 
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          <Target className="w-5 h-5" />
          3분 무료 진단 신청
        </button>
      </div>
    </div>
  );
}
