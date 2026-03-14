import { useState } from "react";

export default function About() {
    const [counter, setCounter] = useState(0);
    const [draft, setDraft] = useState("");
    const [notes, setNotes] = useState([]);

    const addNote = () => {
        const value = draft.trim();
        if (!value) return;

        setNotes((prev) => [...prev, value]);
        setDraft("");
    };

    return (
        <>
            <h1>About: Test useState</h1>

            <div className="card">
                <h3>State Demo</h3>
                <p style={{ marginTop: 0, color: "#666", lineHeight: 1.5 }}>
                    Nilai di halaman ini hanya disimpan di memory React (useState), jadi
                    kalau browser di-refresh nilainya akan balik ke awal.
                </p>

                <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <button onClick={() => setCounter((v) => v + 1)}>Tambah Counter</button>
                    <button onClick={() => setCounter(0)} style={{ background: "#f56565" }}>
                        Reset
                    </button>
                </div>

                <p style={{ margin: "0 0 14px", fontWeight: 700 }}>Counter: {counter}</p>

                <input
                    type="text"
                    placeholder="Tulis catatan sementara..."
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") addNote();
                    }}
                />

                <button onClick={addNote} style={{ marginTop: 10 }}>
                    Simpan ke List
                </button>

                <div style={{ marginTop: 14 }}>
                    {notes.length === 0 ? (
                        <p style={{ margin: 0, color: "#888" }}>Belum ada data state.</p>
                    ) : (
                        notes.map((item, idx) => (
                            <div key={idx} className="item pemasukan" style={{ marginBottom: 8 }}>
                                <span>{item}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}