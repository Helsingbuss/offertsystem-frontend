import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://sgyogaoanvidoeujzfoc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzIiwicmVmIjoic2d5b2dhb2Fudmlkb2V1anpmb2MiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc0NzMzMzY4NCwiZXhwIjoyMDYyOTA5Njg0fQ.CBjG7Q2TIF88w92ktp46Exu4P6vFEkRWAPeyPsCR37U"
);

export default function BergkvaraDashboard() {
  const [uppdragList, setUppdragList] = useState([]);
  const navigate = useNavigate();

  const fetchUppdrag = async () => {
    const { data, error } = await supabase
      .from("uppdrag")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setUppdragList(data);
  };

  useEffect(() => {
    fetchUppdrag();
  }, []);

  const getDeadlineColor = (deadline) => {
    if (!deadline) return "";
    const diffDays = Math.ceil(
      (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays < 3) return "bg-red-100";
    if (diffDays < 14) return "bg-orange-100";
    return "bg-green-100";
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Uppdrag - Bergkvara</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logga ut
        </button>
      </div>
      <table className="w-full bg-white rounded-xl shadow text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Kund</th>
            <th className="p-3">Avresa</th>
            <th className="p-3">Deadline</th>
            <th className="p-3">Pris</th>
            <th className="p-3">Info</th>
          </tr>
        </thead>
        <tbody>
          {uppdragList.length === 0 ? (
            <tr>
              <td className="p-3" colSpan="5">
                Inga uppdrag hittades.
              </td>
            </tr>
          ) : (
            uppdragList.map((u) => (
              <tr
                key={u.id}
                className={`border-t ${getDeadlineColor(u.offert_deadline)}`}
              >
                <td className="p-3 font-semibold">{u.kund}</td>
                <td className="p-3">
                  {u.avresa?.slice(0, 16).replace("T", " ")}
                </td>
                <td className="p-3">
                  {u.offert_deadline?.slice(0, 16).replace("T", " ")}
                </td>
                <td className="p-3">
                  <input
                    type="text"
                    defaultValue={u.pris || ""}
                    placeholder="Ange pris"
                    className="border rounded p-1 text-sm w-24"
                  />
                  <button className="ml-2 text-xs text-blue-600 underline">
                    Skicka
                  </button>
                </td>
                <td className="p-3">
                  <Info
                    className="w-4 h-4 cursor-pointer text-gray-600"
                    title={`Resplan: ${u.resplan || "-"}\nKommentar: ${u.kommentar || "-"}`}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
