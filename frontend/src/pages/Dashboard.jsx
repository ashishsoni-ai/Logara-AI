function Dashboard() {
  return (
    <div className="min-h-screen text-white py-12">

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black">
          AI Log Dashboard
        </h1>

        <p className="text-neutral-400 mt-4">
          Monitor anomalies, analyze logs, and discover infrastructure insights.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">

        <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800">
          <h2 className="text-neutral-400">Logs Processed</h2>
          <p className="text-3xl font-bold mt-2">24.5K</p>
        </div>

        <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800">
          <h2 className="text-neutral-400">Anomalies</h2>
          <p className="text-3xl font-bold mt-2 text-red-400">12</p>
        </div>

        <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800">
          <h2 className="text-neutral-400">Active Services</h2>
          <p className="text-3xl font-bold mt-2 text-sky-400">8</p>
        </div>

        <div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800">
          <h2 className="text-neutral-400">AI Insights</h2>
          <p className="text-3xl font-bold mt-2 text-emerald-400">34</p>
        </div>

      </div>


      {/* AI Insight */}
      <div className="bg-neutral-950 p-8 rounded-3xl border border-indigo-900 mb-12">

        <h2 className="text-2xl font-bold text-indigo-400 mb-4">
          AI Summary
        </h2>

        <p className="text-neutral-400">
          Elevated database timeout errors detected after deployment v2.1.
          Similar patterns occurred 3 days ago and correlate with Redis latency spikes.
        </p>

      </div>


      {/* Recent Logs */}
      <div className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800">

        <h2 className="text-2xl font-bold mb-6">
          Recent Logs
        </h2>

        <div className="space-y-4">

          <div className="p-4 rounded-xl bg-black">
            ERROR: Database timeout detected
          </div>

          <div className="p-4 rounded-xl bg-black">
            WARNING: Redis queue delay increased
          </div>

          <div className="p-4 rounded-xl bg-black">
            INFO: Service health restored
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;