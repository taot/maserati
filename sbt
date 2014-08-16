SCRIPT_DIR=$(dirname $0)
# DEBUG=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005
java -Xmx1024M -XX:MaxPermSize=256M $DEBUG -jar "$SCRIPT_DIR/sbt-launch.jar" $*
