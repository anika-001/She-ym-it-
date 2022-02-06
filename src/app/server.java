import java.io.*;
import java.net.*;

class server{
  public static void main(String[] args) {
    try{
      ServerSocket ss = new ServerSocket(1201);
      Socket s = ss.accept();

      DataInputStream din = new DataInput Stream(s.getInputStream());
      DataOutputStream dout = new DataOutputStream(s.getOutStream());

      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      String msgin="", msgout="";
      while (!msgin.equals("end")) {
        msgout = din.readLine();
        System.out.println(msgin);
        msgout = br.readLine();
        dout.writeUTF(msgout);
        dout.flush();
      }
      s.close();
    }
    catch (Exception e) {
      //handle exception
    }
  }
}
