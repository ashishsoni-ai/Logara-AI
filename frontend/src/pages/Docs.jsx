function Docs() {
  return (
    <div className="min-h-screen text-white py-20 px-8 max-w-6xl mx-auto">

      {/* Header */}
      <section className="mb-20">
        <div className="inline-flex px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
          Documentation
        </div>

        <h1 className="text-6xl font-black mb-6">
          Build Intelligent
          <span className="block bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Log Workflows.
          </span>
        </h1>

        <p className="max-w-3xl text-xl text-neutral-400">
          Logara AI transforms raw infrastructure logs into searchable,
          AI-powered intelligence through semantic retrieval, anomaly
          detection, and local-first processing.
        </p>
      </section>


      {/* Core Capabilities */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-10">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-neutral-950 rounded-3xl p-8 border border-neutral-800">
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">
              Semantic Search
            </h3>

            <p className="text-neutral-400">
              Replace traditional grep workflows with natural language
              search powered by vector embeddings.
            </p>
          </div>

          <div className="bg-neutral-950 rounded-3xl p-8 border border-neutral-800">
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Root Cause Analysis
            </h3>

            <p className="text-neutral-400">
              Identify patterns across infrastructure failures and
              automatically summarize probable causes.
            </p>
          </div>

          <div className="bg-neutral-950 rounded-3xl p-8 border border-neutral-800">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              Local AI Processing
            </h3>

            <p className="text-neutral-400">
              Process sensitive logs locally through Ollama without
              external data exposure.
            </p>
          </div>

          <div className="bg-neutral-950 rounded-3xl p-8 border border-neutral-800">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              Anomaly Correlation
            </h3>

            <p className="text-neutral-400">
              Detect unusual activity patterns before reliability issues
              become incidents.
            </p>
          </div>

        </div>
      </section>


      {/* Architecture */}
      <section className="mb-24">

        <h2 className="text-4xl font-bold mb-10">
          System Architecture
        </h2>

        <div className="bg-neutral-950 rounded-3xl p-10 border border-neutral-800">

          <div className="space-y-8">

            <div>
              <span className="text-indigo-400 font-semibold">
                Ingestion Layer
              </span>

              <p className="text-neutral-400 mt-2">
                Log Sources → FastAPI Ingestor → Redis Queue
              </p>
            </div>

            <div>
              <span className="text-sky-400 font-semibold">
                Processing Layer
              </span>

              <p className="text-neutral-400 mt-2">
                Redis Queue → Log Processor → Qdrant Vector DB → Ollama
              </p>
            </div>

            <div>
              <span className="text-emerald-400 font-semibold">
                Interface Layer
              </span>

              <p className="text-neutral-400 mt-2">
                GraphQL / REST API → React Dashboard
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Quick Start */}
      <section>

        <h2 className="text-4xl font-bold mb-8">
          Quick Start
        </h2>

        <div className="bg-black rounded-3xl border border-neutral-800 p-8 overflow-auto">

<pre>{`git clone https://github.com/Dharanish-AM/Logara-AI.git

docker-compose up -d

cd backend
python -m pip install "fastapi[standard]"
python -m fastapi dev main.py

cd frontend
npm install
npm run dev`}</pre>

        </div>

      </section>

    </div>
  );
}

export default Docs;