//package application.utils;
//
//import java.sql.Connection;
//import java.sql.DatabaseMetaData;
//import java.sql.Date;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.LinkedHashMap;
//
//
//public class DatabaseUtility {
//	private static String hostName = "hostName";
//	private static String serverPort = "serverPort";
//	private static String serverName = "serverName";
//	private static String satHostName ="satHostName";
//	private static String satServerName = "satServerName";
//	private static String devUsername = "collectionsDevDBUsername";
//	private static String devPassword = "collectionsDevDBPassword";
//	private static String devTestUsername = "collectionsDevTestDBUsername";
//	private static String devTestPassword = "collectionsDevTestDBPassword";
//	private static String devPsiUsername = "collectionsDevPsiDBUsername";
//	private static String devPsiPassword = "collectionsDevPsiDBPassword";
//	private static String satUsername = "collectionsSATDBUsername";
//	private static String satPassword = "collectionsSATDBPassword";
//	//private static final Logger LOGGER = Logger.getLogger(DatabaseUtility.class);         
//	private static String password = "dbPassword";
//	private static String url = "jdbc:oracle:thin:@" + hostName + ":" + serverPort + "/";
//	private static String satURL = "jdbc:oracle:thin:@" + satHostName + ":" + serverPort + "/";
//
//
//	public static Connection connectToOracleDB(String environment) {
//		Connection connection=null;
//		String username=null;
//		String password=null;
//		String connectionURL=null;
//		if(environment.equalsIgnoreCase("dev")){
//			username=devUsername;
//			password=devPassword;
//			connectionURL = url + satServerName;
//		}
//																																																																																																																																												// else
//																																																																																																																																												// if																																																																																																																																										// (environment.equalsIgnoreCase("devpsi")
//																																																																																																																																												// // environment.equalsIgnoreCase("devtest"
//// {
//// username =
//// devTestUsername;
//// password =
//// devTestPassword;
//			// connectionURL = url +
//// serverName;
//		else if(environment.equalsIgnoreCase("devpsi")||environment.equalsIgnoreCase("devtest")){
//			
//			username=devPsiUsername;
//			password=devPsiPassword;
//			connectionURL = url+serverName;
//		}else if(environment.equalsIgnoreCase("sat")){
//			username=satUsername;
//			  password=satPassword;
//			  connectionURL=satURL+satServerName;
//			  }
//		try{String driverName="oracle.jdbc.driver.OracleDriver";
//		Class.forName(driverName);
//		connection=DriverManager.getConnection(connectionURL,username,password);
////		LOGGER.info("Connected to DB");
//		}catch(ClassNotFoundException e){
////LOGGER.error("Could not find the database driver "+e.getMessage());
//	    }catch(SQLException e){
////LOGGER.error("Could not connect to the database. Error: "+e.getMessage());                               }                               return connection;               
//	}                
//
//public static LinkedHashMap<String, String> getMultipleColumnValues(Connection connection, String query,String column1, String column2) {
//		LinkedHashMap<String, String> hm = new LinkedHashMap<String, String>();
//		try {
//			Statement stmt = connection.createStatement();
//			try {
//				ResultSet rs = stmt.executeQuery(query);
//				int row = 1;
//				try {
//					while (rs.next()) {
//						hm.put(column1 + "_" + row, rs.getString(column1));
//						hm.put(column2 + "_" + row, rs.getString(column2));
//						row += 1;
//					}
//				} finally {
//					try {
//						rs.close();
//					} catch (Throwable ignore) {
// 
//					}
//				}
// 		} catch (SQLException e) {
////		LOGGER.error("Database query failed");
// 
//                                                } finally {
//                                                                try {
//                                                                                stmt.close();
//                                                                } catch (Throwable ignore) {
// 
//                                                                }
//                                                }
//                                } catch (SQLException e1) {
//                                                e1.printStackTrace();
//                                } finally {
//                                                try {
//                                                                connection.close();
//                                                } catch (Throwable ignore) {
//                                                }
//                                }
//                                return hm;
//                }
//// 
////               
////
////	public static LinkedHashMap<String, String> getMultipleColumnValues(Connection connection, String query,
////                                                String column1, String column2, String column3) {
////                                LinkedHashMap<String, String> hm = new LinkedHashMap<String, String>();
////                                try {
////                                                Statement stmt = connection.createStatement();
////                                                try {
////                                                                ResultSet rs = stmt.executeQuery(query);
////                                                                int row = 1;
////                                                                try {
////                                                                                while (rs.next()) {
////                                                                                                hm.put(column1 + "_" + row, rs.getString(column1));
////                                                                                                hm.put(column2 + "_" + row, rs.getString(column2));
////                                                                                                hm.put(column3 + "_" + row, rs.getString(column3));
////                                                                                                row += 1;
////                                                                                }
////                                                                } finally {
////                                                                                try {
////                                                                                                rs.close();
////                                                                                } catch (Throwable ignore) {
//// 
////                                                                                }
////                                                                }
////                                                } catch (SQLException e) {
////                                                                LOGGER.error("Database query failed");
//// 
////                                                } finally {
////                                                                try {
////                                                                                stmt.close();
////                                                                } catch (Throwable ignore) {
//// 
////                                                                }
////                                                }
////                                } catch (SQLException e1) {
////                                                e1.printStackTrace();
////                                } finally {
////                                                try {
////                                                                connection.close();
////                                                } catch (Throwable ignore) {
////                                                }
////                                }
////                                return hm;
////                }
//// 
////               
////
////	public static LinkedHashMap<String, String> getMultipleColumnValues(Connection connection, String query,
////                                                String column1, String column2, String column3, String column4) {
////                                LOGGER.info(query);
////                                LinkedHashMap<String, String> hm = new LinkedHashMap<String, String>();
////                                try {
////                                                Statement stmt = connection.createStatement();
////                                                try {
////                                                                ResultSet rs = stmt.executeQuery(query);
////                                                                int row = 1;
////                                                                try {
////                                                                                while (rs.next()) {
////                                                                                                hm.put(column1 + "_" + row, rs.getString(column1));
////                                                                                                hm.put(column2 + "_" + row, rs.getString(column2));
////                                                                                                hm.put(column3 + "_" + row, rs.getString(column3));
////                                                                                                hm.put(column4 + "_" + row, rs.getString(column4));
////                                                                                                row += 1;
////                                                                                }
////                                                                } finally {
////                                                                                try {
////                                                                                                rs.close();
////                                                                                } catch (Throwable ignore) {
//// 
////                                                                                }
////                                                                }
////                                                } catch (SQLException e) {
////                                                                LOGGER.error("Database query failed");
//// 
////                                                } finally {
////                                                                try {
////                                                                                stmt.close();
////                                                                } catch (Throwable ignore) {
//// 
////                                                                }
////                                                }
////                                } catch (SQLException e1) {
////                                                e1.printStackTrace();
////                                } finally {
////                                                try {
////                                                                connection.close();
////                                                } catch (Throwable ignore) {
////                                                }
////                                }
////                                return hm;
////                }
//// 
////               
////
////	public static void getColumnList(Connection connection, String tableName) {
////		                               String catalog=null;                               String schemaPattern=null;                               String tableNamePattern=tableName;                               String columnNamePattern=null;                                try{                                               Statement stmt=connection.createStatement();                                               try{                                                               DatabaseMetaData databaseMetaData=connection.getMetaData();                                                               ResultSet rs=databaseMetaData.getColumns(catalog,schemaPattern,tableNamePattern,columnNamePattern);                                                                // ResultSetMetaData
////																																																																																																																																																																																																// rsmd
////																																																																																																																																																																																																// =
////																																																																																																																																																																																																// rs.getMetaData();
////		                                                               try{                                                                              while(rs.next()){                                                                                               String columnName=rs.getString(4);                                                                                               int columnType=rs.getInt(5);                                                                                               {                                                                                                               LOGGER.info("Column "+columnName+" Column Type "+columnType);                                                                                               }                                                                               }                                                               }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                                }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                                }finally{                                                               try{                                                                               stmt.close();                                                               }catch(Throwable ignore){                                                                }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                                }                               }                
////	}                
////
////	public static int getRecordCount(Connection connection, String query) {
////		                               LOGGER.info(query);                               int count=0;                               try{                                               Statement stmt=connection.createStatement();                                               try{                                                               ResultSet rs=stmt.executeQuery(query);                                                               try{                                                                               rs.next();                                                                               count=rs.getInt("rowcount");                                                               }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                               }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                                               LOGGER.error(e);                                               }finally{                                                               try{                                                                               stmt.close();                                                               }catch(Throwable ignore){                                                               }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                               }                               }                               LOGGER.info("Count = "+count);                               return count;               
////	}                
////
////	public static int getRecordCountPreparedStatement(Connection connection, String query, List<String> value) {
////		                               LOGGER.info(query);                               int count=0;                               try{                                               PreparedStatement preStmt=connection.prepareStatement(query);                                               for(int i=0;i<value.size();i++){                                                               preStmt.setString((i+1),value.get(i));                                               }                                               try{                                                               ResultSet rs=preStmt.executeQuery();                                                               try{                                                                               rs.next();                                                                               count=rs.getInt("rowcount");                                                               }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                               }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                                               LOGGER.error(e);                                               }finally{                                                               try{                                                                               preStmt.close();                                                               }catch(Throwable ignore){                                                               }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                               }                               }                               return count;               
////	}                
////
////	public static String getSingleRowDBResultValue(Connection sql, String searchTable, String resultColumn,
////                                                String searchColumn, String searchValue) {
////                                String dbValue = null;
////                                String query = "select " + resultColumn + " from " + searchTable + " where " + searchColumn + "=" + "\'"
////                                                                + searchValue + "\' ";
////                                LOGGER.info(query);
////                                Statement stmt = null;
////                                try {
////                                                stmt = sql.createStatement();
////                                } catch (SQLException e1) {
////                                                e1.printStackTrace();
////                                }
////                                try {
//// 
////                                                ResultSet rs = stmt.executeQuery(query);
////                                                try {
////                                                                rs.next();
////                                                                dbValue = rs.getString(resultColumn);
//// 
////                                                } finally {
////                                                                try {
////                                                                                rs.close();
////                                                                } catch (Throwable ignore) {
//// 
////                                                                }
////                                                }
////                                } catch (SQLException e) {
////                                                LOGGER.error("Database query failed");
////                                } finally {
////                                                try {
////                                                                stmt.close();
////                                                } catch (Throwable ignore) {
//// 
////                                                }
////                                }
////                                return dbValue;
////                }
//// 
////               
////
////	public static String getSingleRowDBResultValue(Connection sql, String query, String resultColumn) {
////		                               LOGGER.info(query);                               String dbValue=null;                               Statement stmt=null;                               try{                                               stmt=sql.createStatement();                               }catch(SQLException e1){                                               e1.printStackTrace();                               }                               try{                                                ResultSet rs=stmt.executeQuery(query);                                               try{                                                               rs.next();                                                               dbValue=rs.getString(resultColumn);                                               }finally{                                                               try{                                                                               rs.close();                                                              }catch(Throwable ignore){                                                                }                                               }                               }catch(SQLException e){                                               LOGGER.error("Database query failed");                               }finally{                                               try{                                                               stmt.close();                                               }catch(Throwable ignore){                                                }                               }                               return dbValue;               
////	}                
////
////	public static List<String> getSingleRowDBResultValues(Connection sql, String query, String resultColumn,
////                                                String resultColumn2) {
////                                LOGGER.info(query);
////                                String dbValue = null;
////                                String dbValue2 = null;
////                                Statement stmt = null;
////                                try {
////                                                stmt = sql.createStatement();
////                                } catch (SQLException e1) {
////                                                e1.printStackTrace();
////                                }
////                                try {
//// 
////                                                ResultSet rs = stmt.executeQuery(query);
////                                                try {
////                                                                rs.next();
////                                                                dbValue = rs.getString(resultColumn);
////                                                                dbValue2 = rs.getString(resultColumn2);
////                                                } finally {
////                                                                try {
////                                                                                rs.close();
////                                                                } catch (Throwable ignore) {
//// 
////                                                                }
////                                                }
////                                } catch (SQLException e) {
////                                                LOGGER.error("Database query failed");
////                                } finally {
////                                                try {
////                                                                stmt.close();
////                                                } catch (Throwable ignore) {
//// 
////                                                }
////                                }
////                                return Arrays.asList(dbValue, dbValue2);
////                }
//// 
////               
////
////	public static List<String> getDBValues(Connection connection, String query) {
////		                               LOGGER.info(query);                               List<String>resultSet=new ArrayList<String>();                               try{                                               Statement stmt=connection.createStatement();                                               try{                                                               ResultSet rs=stmt.executeQuery(query);                                                                // ResultSetMetaData
////																																																																																																																								// rsmd
////																																																																																																																								// =
////																																																																																																																								// rs.getMetaData();
////		                                                               try{                                                                               while(rs.next()){                                                                                               int numColumns=rs.getMetaData().getColumnCount();                                                                                               for(int i=1;i<=numColumns;i++){                                                                                                               resultSet.add(((String)rs.getObject(i).toString()).trim());                                                                                               }                                                                               }                                                               }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                                }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                               }finally{                                                               try{                                                                               stmt.close();                                                               }catch(Throwable ignore){                                                                }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                                }                               }                               return resultSet;               
////	}                              
////
////	public static List<Integer> getIntDBValues(Connection connection, String query) {
////		                               LOGGER.info(query);                               List<Integer>resultSet=new ArrayList<>();                               try{                                               Statement stmt=connection.createStatement();                                               try{                                                               ResultSet rs=stmt.executeQuery(query);                                                                // ResultSetMetaData
////																																																																																																																						// rsmd
////																																																																																																																						// =
////																																																																																																																						// rs.getMetaData();
////		                                                               try{                                                                               while(rs.next()){                                                                                               int numColumns=rs.getMetaData().getColumnCount();                                                                                               for(int i=1;i<=numColumns;i++){                                                                                                               resultSet.add((Integer)(rs.getInt(i)));                                                                                               }                                                                               }                                                               }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                                }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                               }finally{                                                               try{                                                                               stmt.close();                                                               }catch(Throwable ignore){                                                                }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                                }                               }                               return resultSet;               
////	}                              
////
////	public static int getIntDBValue(Connection connection, String query) {
////		                               int dbValue=0;                               try{                                               Statement stmt=connection.createStatement();                                               try{                                                               ResultSet rs=stmt.executeQuery(query);                                                                // ResultSetMetaData
////																																																																																																			// rsmd
////																																																																																																			// =
////																																																																																																			// rs.getMetaData();
////		                                                               try{                                                                               rs.next();                                                                               dbValue=rs.getInt(1);                                                                }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                                }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                               }finally{                                                               try{                                                                               stmt.close();                                                               }catch(Throwable ignore){                                                                }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                                }                               }                               return dbValue;                
////	}                
////
////	public static double getDoubleDBValue(Connection connection, String query) {
////		                               double dbValue=0;                               LOGGER.info(query);                               try{                                               Statement stmt=connection.createStatement();                                               try{                                                               ResultSet rs=stmt.executeQuery(query);                                                                // ResultSetMetaData
////																																																																																																																// rsmd
////																																																																																																																// =
////																																																																																																																// rs.getMetaData();
////		                                                               try{                                                                               rs.next();                                                                               dbValue=rs.getDouble(1);                                                                }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                                }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                               }finally{                                                               try{                                                                               stmt.close();                                                               }catch(Throwable ignore){                                                                }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                                }                               }                               return dbValue;               
////	}                
////
////	public static String getDateDBValue(Connection connection, String query) {
////		                               Date dbValue=null;                               LOGGER.info(query);                               try{                                               Statement stmt=connection.createStatement();                                               try{                                                               ResultSet rs=stmt.executeQuery(query);                                                                // ResultSetMetaData
////																																																																																																																	// rsmd
////																																																																																																																	// =
////																																																																																																																	// rs.getMetaData();
////		                                                               try{                                                                               rs.next();                                                                               dbValue=rs.getDate(1);                                                                }finally{                                                                               try{                                                                                               rs.close();                                                                               }catch(Throwable ignore){                                                                                }                                                               }                                               }catch(SQLException e){                                                               LOGGER.error("Database query failed");                                               }finally{                                                               try{                                                                               stmt.close();                                                               }catch(Throwable ignore){                                                                }                                               }                               }catch(SQLException e1){                                               e1.printStackTrace();                               }finally{                                               try{                                                               connection.close();                                               }catch(Throwable ignore){                                                }                               }                               SimpleDateFormat sdf=new SimpleDateFormat("MM/dd/yyyy");                               String date=sdf.format(dbValue);                               return date;               
////	} 
//}
