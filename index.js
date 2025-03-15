import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock login functionality
    if (username && password) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="p-6 bg-gray-800 rounded-lg shadow-xl">
        <CardContent className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center">Welcome to Casino</h1>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 rounded" />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 rounded" />
          <Button className="bg-green-500 hover:bg-green-600" onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}
