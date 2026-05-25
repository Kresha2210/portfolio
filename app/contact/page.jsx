"use client";

export default function Contact() {
  const email = "kreshapatel2210@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email address copied to clipboard.");
    } catch (error) {
      console.error(error);
      alert(`Copy failed. Use ${email} manually.`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="glass rounded-2xl p-8 md:p-10 border border-white/10">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4">
          Contact
        </p>
        <h1 className="text-4xl font-extrabold mb-3">Get in touch</h1>
        <p className="text-gray-300 max-w-xl mb-8">
          The simplest way to reach me is by email. Send a message directly and
          I’ll reply as soon as possible.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-lg font-semibold text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-400/20"
          >
            Email me
            <span className="mt-1 block text-sm font-normal text-emerald-100/80">
              {email}
            </span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="rounded-xl border border-gray-700 bg-black/40 px-5 py-4 text-left text-lg font-semibold text-white transition hover:border-gray-500 hover:bg-black/60"
          >
            Copy email
            <span className="mt-1 block text-sm font-normal text-gray-400">
              Paste it into your mail app
            </span>
          </button>
        </div>

        <div className="mt-8 rounded-xl border border-gray-800 bg-black/30 p-5 text-sm text-gray-300">
          If you prefer, you can also use the subject line to mention your
          project, timeline, or budget.
        </div>
      </div>
    </div>
  );
}
