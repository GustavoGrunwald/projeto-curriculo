import { Apresentacao } from "~/chat/Apresentacao";
import { BatePapo } from "~/chat/BatePapo";
import { AppBar } from "~/home/appbar";

export default function Chat() {
  return (
    <div>
      <AppBar />
      <Apresentacao />
      <BatePapo />
    </div>
  );
}
