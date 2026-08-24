export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <section className="w-full max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          Welcome Authentication App
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Learn authentication one step at a time
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          This project will demonstrate signup, login, a protected welcome
          message, PostgreSQL persistence, Playwright testing, and logout.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold text-sky-400">Step 1</p>
            <h2 className="mt-2 text-xl font-semibold">Sign up</h2>
            <p className="mt-2 text-slate-400">
              Create an account using basic user information.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold text-sky-400">Step 2</p>
            <h2 className="mt-2 text-xl font-semibold">Log in</h2>
            <p className="mt-2 text-slate-400">
              Start a secure authenticated session.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold text-sky-400">Step 3</p>
            <h2 className="mt-2 text-xl font-semibold">Log out</h2>
            <p className="mt-2 text-slate-400">
              End the session and protect private content.
            </p>
          </article>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Application foundation in progress — authentication comes next.
        </p>
      </section>
    </main>
  );
}