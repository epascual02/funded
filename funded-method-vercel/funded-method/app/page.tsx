import {
  ArrowDownRight, ArrowRight, Check, Clock3, Crosshair, LineChart,
  LockKeyhole, MessageCircle, ShieldCheck, Target, TrendingUp, Zap
} from "lucide-react";

const WHATSAPP_NUMBER = "5491127151736"; // Reemplazar por tu número, con código de país y sin + ni espacios.
const WHATSAPP_MESSAGE =
  "Hola, quiero recibir información sobre la mentoría individual de Funded Method.";

function whatsappLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

const features = [
  {
    icon: <Crosshair size={19} />,
    number: "01",
    title: "Una referencia definida",
    text: "El precio de las 09:29 AM de Nueva York funciona como nivel de referencia para filtrar la dirección de las operaciones.",
  },
  {
    icon: <Target size={19} />,
    number: "02",
    title: "Entradas con condiciones",
    text: "La ejecución se activa mediante desplazamiento o ruptura válida de rango. No se trata de entrar por intuición.",
  },
  {
    icon: <ShieldCheck size={19} />,
    number: "03",
    title: "Riesgo predefinido",
    text: "Stop loss fijo de 50 puntos y una relación riesgo-beneficio mínima de 1:1.5, siempre que la estructura permita respetarla.",
  },
  {
    icon: <Clock3 size={19} />,
    number: "04",
    title: "Una sesión específica",
    text: "La metodología está diseñada exclusivamente para la sesión de Nueva York. No busca operar todo el día.",
  },
];

const faqs = [
  {
    q: "¿Necesito experiencia previa?",
    a: "Sí. La mentoría está pensada para personas que ya conocen los fundamentos del trading, saben utilizar una plataforma de gráficos y comprenden conceptos como stop loss, take profit y contratos de futuros.",
  },
  {
    q: "¿Qué mercado se opera?",
    a: "La metodología está desarrollada para Nasdaq Futures. La operativa se concentra exclusivamente en la sesión de Nueva York.",
  },
  {
    q: "¿El sistema garantiza aprobar una evaluación o retirar dinero?",
    a: "No. Ninguna estrategia puede garantizar resultados, aprobaciones ni retiros. El objetivo de la mentoría es enseñar una metodología y sus reglas de ejecución. Los resultados dependen, entre otros factores, de la ejecución, los costes, las condiciones de mercado y las reglas de cada empresa.",
  },
  {
    q: "¿Puedo utilizarlo con cualquier empresa de fondeo?",
    a: "La lógica del sistema está orientada a estructuras de evaluación de empresas de fondeo. Antes de aplicarlo, tenés que comprobar que las reglas de la empresa elegida sean compatibles con tu operativa, instrumentos, horarios y gestión de riesgo.",
  },
  {
    q: "¿Cómo se realiza la mentoría?",
    a: "Es una sesión individual online de aproximadamente 90 a 120 minutos. Coordinamos día y horario por WhatsApp. La sesión cubre la lógica del sistema, las condiciones de entrada, la gestión del riesgo y ejemplos operativos.",
  },
  {
    q: "¿Incluye señales o gestión de cuentas?",
    a: "No. Es una mentoría educativa para aprender a ejecutar el sistema. No incluye señales, administración de cuentas, ejecución de operaciones por terceros ni promesas de rentabilidad.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="relative z-20 border-b border-white/[0.07]">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="Funded Method inicio">
            <span className="flex h-9 w-9 items-center justify-center rounded border border-mint/40 bg-mint/10 text-mint">
              <TrendingUp size={19} />
            </span>
            <span className="text-[13px] font-black tracking-[.19em]">FUNDED METHOD</span>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] text-[#a8b4ad] md:flex">
            <a className="transition hover:text-white" href="#metodologia">Metodología</a>
            <a className="transition hover:text-white" href="#resultados">Experiencia</a>
            <a className="transition hover:text-white" href="#mentoria">Mentoría</a>
            <a className="transition hover:text-white" href="#faq">Preguntas</a>
          </nav>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-secondary !px-3 !py-2 text-xs">
            Consultar <ArrowRight size={14} />
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="container relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div className="max-w-[650px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/[0.06] px-3 py-2 text-[10px] font-bold tracking-[.16em] text-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_12px_#7be0b1]" />
              MENTORÍA PRIVADA · NASDAQ FUTURES
            </div>
            <h1 className="max-w-[720px] text-[clamp(43px,6.2vw,76px)] font-black leading-[.99] tracking-[-.065em]">
              OPERÁ CON UN <span className="text-mint">MÉTODO.</span><br />
              NO CON IMPULSOS.
            </h1>
            <p className="mt-7 max-w-[550px] text-[16px] leading-8 text-[#a8b4ad]">
              Aprendé una metodología mecánica desarrollada para operar empresas de fondeo durante la sesión de Nueva York, con reglas concretas de entrada, salida y gestión del riesgo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#mentoria" className="btn-primary">
                Conocer la mentoría <ArrowDownRight size={17} />
              </a>
              <a href="#metodologia" className="btn-secondary">Explorar el sistema</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.09] pt-7">
              <div>
                <div className="text-2xl font-black tracking-tight">1:1.5</div>
                <div className="mt-1 text-[10px] uppercase tracking-[.15em] text-[#7f8c84]">Risk / Reward mínimo</div>
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight">09:29</div>
                <div className="mt-1 text-[10px] uppercase tracking-[.15em] text-[#7f8c84]">Referencia NY</div>
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight">50 pts</div>
                <div className="mt-1 text-[10px] uppercase tracking-[.15em] text-[#7f8c84]">Stop loss fijo</div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="glow absolute -inset-8 rounded-full bg-mint/[0.04] blur-3xl" />
            <div className="card relative overflow-hidden rounded-xl p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <div className="text-[10px] font-bold tracking-[.18em] text-mint">SYSTEM OVERVIEW</div>
                  <div className="mt-1 text-sm font-semibold">Estructura operativa</div>
                </div>
                <div className="rounded border border-white/10 px-2 py-1 text-[9px] tracking-widest text-[#89968e]">NQ · NY</div>
              </div>
              <div className="my-7 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#96a39b]">Sesión</span>
                  <span className="text-sm font-semibold">Nueva York</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#96a39b]">Precio de referencia</span>
                  <span className="font-mono text-sm text-mint">09:29 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#96a39b]">Stop loss</span>
                  <span className="font-mono text-sm">50 puntos</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#96a39b]">Objetivo mínimo</span>
                  <span className="font-mono text-sm text-mint">1.5R</span>
                </div>
              </div>
              <div className="rounded-lg border border-mint/20 bg-mint/[0.055] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[.15em] text-[#9eaaa3]">RISK / REWARD</span>
                  <span className="text-[10px] text-mint">REGLA DEL SISTEMA</span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-black tracking-[-.06em]">1:1.5</span>
                  <span className="pb-1 text-xs text-[#9eaaa3]">riesgo / beneficio</span>
                </div>
                <div className="mt-5 flex h-2 overflow-hidden rounded-full bg-[#26332c]">
                  <div className="w-2/5 bg-[#66756c]" />
                  <div className="w-3/5 bg-mint" />
                </div>
                <div className="mt-2 flex justify-between text-[9px] uppercase tracking-wider text-[#8c9991]">
                  <span>Riesgo · 1R</span><span>Beneficio · 1.5R</span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-[10px] text-[#849188]">
                <LockKeyhole size={13} className="text-mint" />
                Reglas predefinidas. Ejecución disciplinada.
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-white/10 bg-[#111815] px-4 py-3 shadow-2xl sm:block">
              <div className="text-[9px] tracking-[.16em] text-[#89968e]">ENFOQUE</div>
              <div className="mt-1 text-sm font-bold">PROP FIRM FIRST</div>
            </div>
          </div>
        </div>
      </section>

      <section id="metodologia" className="section border-y border-white/[0.06] bg-[#0c110f]">
        <div className="container">
          <div className="max-w-[650px]">
            <div className="eyebrow">La metodología</div>
            <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">Un sistema. <span className="text-mint">Reglas claras.</span></h2>
            <p className="mt-5 leading-7 text-[#9ba8a1]">
              Funded Method está diseñado alrededor de una premisa: operar con parámetros definidos y considerar las restricciones de riesgo propias de las empresas de fondeo.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <div key={item.number} className="card rounded-lg p-6 transition hover:border-mint/30">
                <div className="flex items-center justify-between">
                  <span className="text-mint">{item.icon}</span>
                  <span className="font-mono text-xs text-[#65736a]">{item.number}</span>
                </div>
                <h3 className="mt-7 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#9ba8a1]">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 rounded-xl border border-mint/20 bg-mint/[0.045] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="eyebrow">La lógica detrás del RR</div>
              <h3 className="mt-3 text-2xl font-black tracking-tight">Pensado para estructuras de evaluación.</h3>
              <p className="mt-3 max-w-[680px] text-sm leading-7 text-[#aab6ae]">
                Como ejemplo, una cuenta de 50K con USD 2.000 de drawdown y USD 3.000 de objetivo presenta una relación de 1:1.5 entre esos importes. La metodología utiliza un RR mínimo de 1:1.5 como uno de sus parámetros. Las condiciones reales varían entre empresas y programas.
              </p>
            </div>
            <div className="flex gap-5 md:gap-7">
              <div><div className="text-2xl font-black">$2K</div><div className="mt-1 text-[9px] uppercase tracking-widest text-[#8b9990]">Drawdown</div></div>
              <div><div className="text-2xl font-black text-mint">$3K</div><div className="mt-1 text-[9px] uppercase tracking-widest text-[#8b9990]">Objetivo</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="eyebrow">Reglas de ejecución</div>
            <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">Menos decisiones. <span className="text-mint">Más estructura.</span></h2>
            <p className="mt-5 leading-7 text-[#9ba8a1]">
              La metodología define cuándo buscar una operación y cuándo dejar pasar una oportunidad. No operar también forma parte del sistema.
            </p>
          </div>
          <div className="card rounded-xl p-6 sm:p-8">
            <div className="space-y-5">
              {[
                ["01", "Definir el nivel", "Tomar como referencia el precio de las 09:29 AM de Nueva York."],
                ["02", "Esperar la ubicación", "Buscar compras por debajo del nivel y ventas por encima."],
                ["03", "Validar el disparador", "Esperar una vela de desplazamiento o una ruptura de rango con cierre del cuerpo fuera del rango."],
                ["04", "Comprobar el recorrido", "El objetivo debe respetar un RR mínimo de 1:1.5 sin atravesar el nivel de referencia."],
                ["05", "Ejecutar con límites", "Stop loss fijo de 50 puntos y máximo de dos operaciones por cuenta."],
              ].map(([n, title, desc]) => (
                <div key={n} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-mint/25 bg-mint/[0.07] font-mono text-xs text-mint">{n}</span>
                  <div>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#93a097]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="section border-y border-white/[0.06] bg-[#0c110f]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <div className="eyebrow">Experiencia operativa</div>
              <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">Un método desarrollado en el mercado real.</h2>
              <p className="mt-5 text-sm leading-7 text-[#9ba8a1]">
                La metodología surge de la experiencia práctica operando programas de fondeo y de la búsqueda de un proceso repetible, con foco en el control del riesgo.
              </p>
            </div>
            <div className="card rounded-xl p-7 sm:p-10">
              <div className="eyebrow">Historial personal declarado</div>
              <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="text-6xl font-black tracking-[-.07em] text-mint sm:text-7xl">USD 20K</span>
                <span className="pb-2 text-sm text-[#98a59d]">en retiros durante los últimos 6 meses</span>
              </div>
              <div className="mt-7 border-t border-white/[0.08] pt-5 text-xs leading-6 text-[#8f9b93]">
                Cifra histórica personal informada por el creador del sistema. Debe acompañarse con documentación verificable cuando se publique como evidencia. No representa una expectativa de ganancias ni garantiza resultados futuros.
              </div>
            </div>
          </div>
          <div className="mt-14">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="eyebrow">Documentación visual</div>
                <h3 className="mt-3 text-2xl font-black tracking-tight">Comprobantes de retiros.</h3>
                <p className="mt-2 max-w-[620px] text-sm leading-6 text-[#9ba8a1]">Una selección de comprobantes compartidos como respaldo del historial personal. Seleccioná una imagen para verla en mayor tamaño.</p>
              </div>
              <span className="text-[10px] uppercase tracking-[.15em] text-[#77847b]">9 archivos · JPG</span>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 9 }, (_, index) => {
                const file = `retiro-${String(index + 1).padStart(2, "0")}.jpg`;
                return (
                  <a key={file} href={`/certificados/${file}`} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-lg border border-white/[0.09] bg-[#101713] transition hover:border-mint/40">
                    <div className="aspect-[4/3] overflow-hidden bg-[#080b0a]">
                      <img src={`/certificados/${file}`} alt={`Comprobante de retiro ${index + 1}`} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]" />
                    </div>
                    <div className="flex items-center justify-between px-3 py-3">
                      <span className="text-xs font-semibold text-[#d8e0da]">Comprobante {String(index + 1).padStart(2, "0")}</span>
                      <span className="text-[10px] text-mint">Ver imagen ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-[10px] leading-5 text-[#77847b]">Los comprobantes ilustran operaciones históricas y no representan una garantía de resultados futuros.</p>
          </div>
        </div>
      </section>

      <section id="mentoria" className="section">
        <div className="container">
          <div className="mx-auto max-w-[680px] text-center">
            <div className="eyebrow">Mentoría individual</div>
            <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">Aprendé el sistema. <span className="text-mint">Regla por regla.</span></h2>
            <p className="mt-5 leading-7 text-[#9ba8a1]">
              Una sesión privada para entender la lógica completa de Funded Method y aprender cómo aplicar sus reglas en tu operativa.
            </p>
          </div>
          <div className="card mx-auto mt-12 max-w-[760px] overflow-hidden rounded-xl">
            <div className="grid md:grid-cols-[1fr_260px]">
              <div className="p-7 sm:p-9">
                <div className="text-xs font-bold tracking-[.16em] text-mint">QUÉ INCLUYE</div>
                <ul className="mt-7 space-y-4">
                  {[
                    "Sesión privada online de 90 a 120 minutos",
                    "Explicación completa de la metodología",
                    "Configuración de niveles y referencias",
                    "Condiciones de entrada y validación",
                    "Stop loss, take profit y gestión del riesgo",
                    "Ejemplos operativos sobre gráficos",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#d8e0da]">
                      <Check size={17} className="mt-0.5 shrink-0 text-mint" />{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-xs text-[#87948c]">
                  <Clock3 size={15} className="text-mint" /> Fecha y horario coordinados por WhatsApp
                </div>
              </div>
              <div className="flex flex-col justify-between border-t border-white/[0.08] bg-white/[0.025] p-7 md:border-l md:border-t-0 sm:p-8">
                <div>
                  <div className="text-[10px] font-bold tracking-[.17em] text-[#8f9c94]">PRECIO DE LANZAMIENTO</div>
                  <div className="mt-4 text-5xl font-black tracking-[-.07em]">$99</div>
                  <div className="mt-1 text-sm text-[#9ba8a1]">USD · pago único</div>
                  <div className="mt-6 h-px bg-white/10" />
                  <p className="mt-5 text-xs leading-6 text-[#9ba8a1]">Mentoría individual. No incluye señales, gestión de cuentas ni garantías de resultados.</p>
                </div>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary mt-8 w-full">
                  <MessageCircle size={17} /> Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section border-t border-white/[0.06] bg-[#0c110f]">
        <div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="eyebrow">Información</div>
            <h2 className="mt-5 text-4xl font-black tracking-[-.05em]">Preguntas frecuentes.</h2>
            <p className="mt-5 text-sm leading-7 text-[#9ba8a1]">Lo importante antes de solicitar tu sesión.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group card rounded-lg p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">
                  {faq.q}
                  <span className="text-xl font-normal text-mint transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-[720px] text-sm leading-7 text-[#9ba8a1]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-xl border border-mint/20 bg-[#101914] px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,224,177,.10),transparent_65%)]" />
            <div className="relative">
              <div className="eyebrow">Funded Method</div>
              <h2 className="mx-auto mt-5 max-w-[700px] text-4xl font-black tracking-[-.05em] sm:text-5xl">La consistencia empieza con un proceso.</h2>
              <p className="mx-auto mt-5 max-w-[560px] text-sm leading-7 text-[#a2afa6]">Conocé la metodología y evaluá si se adapta a tus objetivos y a las reglas de tu empresa de fondeo.</p>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary mt-8">
                <MessageCircle size={17} /> Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] py-8">
        <div className="container flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="text-xs font-black tracking-[.19em]">FUNDED METHOD</div>
            <div className="mt-2 text-[10px] text-[#77847b]">Mentoría educativa independiente.</div>
          </div>
          <div className="max-w-[650px] text-[10px] leading-5 text-[#77847b]">
            El trading de futuros implica un riesgo elevado y puede ocasionar pérdidas. Los resultados históricos no garantizan resultados futuros. La mentoría tiene fines educativos y no constituye asesoramiento financiero, recomendación de inversión ni promesa de aprobación o rentabilidad. Las reglas de las empresas de fondeo pueden cambiar y deben verificarse directamente con cada proveedor.
          </div>
          <div className="shrink-0 text-[10px] text-[#77847b]">© {new Date().getFullYear()} Funded Method</div>
        </div>
      </footer>
    </main>
  );
}
