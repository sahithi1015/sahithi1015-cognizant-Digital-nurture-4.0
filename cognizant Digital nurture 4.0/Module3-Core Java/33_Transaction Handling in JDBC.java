import java.sql.*;

public class TransactionExample {
    public static void main(String[] args) throws Exception {
        Connection con = DriverManager.getConnection("jdbc:sqlite:bank.db");
        con.setAutoCommit(false);
        try {
            Statement stmt = con.createStatement();
            stmt.executeUpdate("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
            stmt.executeUpdate("UPDATE accounts SET balance = balance + 100 WHERE id = 2");
            con.commit();
            System.out.println("Transfer successful");
        } catch (Exception e) {
            con.rollback();
            System.out.println("Transfer failed");
        }
        con.close();
    }
}
