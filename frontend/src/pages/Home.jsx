import Hero from "../components/Hero";
import LogExplorer from "../components/LogExplorer";

function Home() {
  return (
    <>
      <Hero />

      {/* Features Section */}
      <section
        id="features"
        className="py-32 text-white border-t border-neutral-900"
      >
        <h1 className="text-5xl font-bold mb-6">
          Core Capabilities
        </h1>

        <p className="text-neutral-400 max-w-3xl mb-12">
          Logara AI transforms noisy system logs into actionable intelligence
          using semantic search, AI-powered analysis, and local-first
          processing.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-4">
              Semantic Log Search
            </h2>

            <p className="text-neutral-400">
              Move beyond keyword matching and search logs using natural
              language queries powered by vector embeddings.
            </p>
          </div>

          <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-4">
              Root Cause Synthesis
            </h2>

            <p className="text-neutral-400">
              Automatically analyze error clusters and identify potential
              infrastructure or application issues.
            </p>
          </div>

          <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-4">
              Local First AI
            </h2>

            <p className="text-neutral-400">
              Built with Ollama for secure local processing of sensitive
              infrastructure logs.
            </p>
          </div>

          <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-4">
              Anomaly Correlation
            </h2>

            <p className="text-neutral-400">
              Detect unusual log patterns and correlate anomalies before
              reliability issues escalate.
            </p>
          </div>

        </div>
      </section>

      {/* Architecture Section */}
      <section
 id="architecture"
 className="py-32 border-t border-neutral-900"
>
  <h1 className="text-5xl font-bold mb-6">
    Architecture
  </h1>

  <p className="text-neutral-400 max-w-3xl mb-12">
    Logara AI follows a modular microservice architecture designed
    for scalable ingestion and AI-powered log intelligence.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-neutral-950 p-8 rounded-3xl border border-indigo-900">
      <h2 className="text-xl font-bold text-indigo-400 mb-4">
        Ingestion Layer
      </h2>

      <ul className="space-y-3 text-neutral-400">
        <li>Log Sources</li>
        <li>↓</li>
        <li>FastAPI Ingestor</li>
        <li>↓</li>
        <li>Redis Queue</li>
      </ul>
    </div>

    <div className="bg-neutral-950 p-8 rounded-3xl border border-sky-900">
      <h2 className="text-xl font-bold text-sky-400 mb-4">
        Processing Layer
      </h2>

      <ul className="space-y-3 text-neutral-400">
        <li>Redis Queue</li>
        <li>↓</li>
        <li>Log Processor</li>
        <li>↓</li>
        <li>Qdrant + Ollama</li>
      </ul>
    </div>

    <div className="bg-neutral-950 p-8 rounded-3xl border border-emerald-900">
      <h2 className="text-xl font-bold text-emerald-400 mb-4">
        Interface Layer
      </h2>

      <ul className="space-y-3 text-neutral-400">
        <li>GraphQL / REST API</li>
        <li>↓</li>
        <li>React Dashboard</li>
      </ul>
    </div>

  </div>
</section>

      <LogExplorer />
    </>
  );
}

export default Home;